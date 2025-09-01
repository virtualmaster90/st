'use server';
/**
 * @fileOverview An AI tool to verify crop insurance claims using mock Nokia Network-as-Code APIs.
 *
 * - verifyClaim - A function that handles the claim verification process.
 * - VerifyClaimInput - The input type for the verifyClaim function.
 * - VerifyClaimOutput - The return type for the verifyClaim function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VerifyClaimInputSchema = z.object({
  farmLocation: z
    .string()
    .describe(
      'The GPS coordinates of the farm location where the damage occurred.'
    ),
  claimantLocation: z
    .string()
    .describe(
      'The GPS coordinates of the claimant at the time of the damage.'
    ),
  insuredArea: z
    .string()
    .describe('The GPS coordinates of the insured farming area.'),
  damageDescription: z
    .string()
    .describe('The description of the damage to the crop.'),
  photoDataUri: z
    .string()
    .optional()
    .describe(
      'A photo of the damaged crop, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.'      
    ),
});
export type VerifyClaimInput = z.infer<typeof VerifyClaimInputSchema>;

const VerifyClaimOutputSchema = z.object({
  isWithinInsuredArea: z.boolean().describe('Whether the farm is within the insured area.'),
  isClaimantPresent: z.boolean().describe('Whether the claimant was present in the insured zone during the damage.'),
  isApproved: z.boolean().describe('Whether the claim is automatically approved or flagged for review.'),
  reviewReason: z.string().optional().describe('The reason for flagging the claim for review, if applicable.'),
});
export type VerifyClaimOutput = z.infer<typeof VerifyClaimOutputSchema>;

export async function verifyClaim(input: VerifyClaimInput): Promise<VerifyClaimOutput> {
  return verifyClaimFlow(input);
}

const verifyClaimPrompt = ai.definePrompt({
  name: 'verifyClaimPrompt',
  input: {schema: VerifyClaimInputSchema},
  output: {schema: VerifyClaimOutputSchema},
  prompt: `You are an AI assistant that verifies crop insurance claims based on location data and damage descriptions.

You will evaluate whether the farm is within the insured area and whether the claimant was present in the insured zone during the damage.

Based on this information, you will determine if the claim is automatically approved or if it should be flagged for review.

Farm Location: {{{farmLocation}}}
Claimant Location: {{{claimantLocation}}}
Insured Area: {{{insuredArea}}}
Damage Description: {{{damageDescription}}}

Consider the photo, if provided: {{#if photoDataUri}}{{media url=photoDataUri}}{{/if}}

Output your assessment in JSON format. Include reviewReason if the claim is not approved.`,
});

const verifyClaimFlow = ai.defineFlow(
  {
    name: 'verifyClaimFlow',
    inputSchema: VerifyClaimInputSchema,
    outputSchema: VerifyClaimOutputSchema,
  },
  async input => {
    // Mock API integration with Nokia Network-as-Code APIs
    const isWithinInsuredArea = mockGeofencingApi(input.farmLocation, input.insuredArea);
    const isClaimantPresent = mockConnectivityInsightsApi(input.claimantLocation, input.insuredArea);

    let reviewReason: string | undefined = undefined;
    let isApproved = false;

    if (!isWithinInsuredArea) {
      reviewReason = 'Farm location is not within the insured area.';
    } else if (!isClaimantPresent) {
      reviewReason = 'Claimant was not present in the insured zone during the damage.';
    } else {
      isApproved = true;
    }

    const {output} = await verifyClaimPrompt({
      ...input,
      isWithinInsuredArea,
      isClaimantPresent,
      isApproved,
      reviewReason,
    });

    return {
        isWithinInsuredArea,
        isClaimantPresent,
        isApproved,
        reviewReason,
    };
  }
);

// Mock functions for Nokia Network-as-Code APIs
function mockGeofencingApi(farmLocation: string, insuredArea: string): boolean {
  // Implement logic to check if the farm location is within the insured area
  // This is a mock implementation and should be replaced with actual API calls in a real application
  // For demonstration purposes, let's assume it always returns true
  return true;
}

function mockConnectivityInsightsApi(claimantLocation: string, insuredArea: string): boolean {
  // Implement logic to check if the claimant was present in the insured zone during the damage
  // This is a mock implementation and should be replaced with actual API calls in a real application
  // For demonstration purposes, let's assume it always returns true
  return true;
}
