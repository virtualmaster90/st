'use server';

import { verifyClaim, type VerifyClaimOutput } from '@/ai/flows/claim-verification';
import { z } from 'zod';

const claimActionSchema = z.object({
  name: z.string(),
  cropType: z.string(),
  damageDescription: z.string(),
  photo: z.instanceof(File).optional(),
});

type ActionResponse = {
  success: boolean;
  data?: VerifyClaimOutput;
  error?: string;
};

export async function submitClaimAction(
  formData: FormData
): Promise<ActionResponse> {
  const rawFormData = {
    name: formData.get('name'),
    cropType: formData.get('cropType'),
    damageDescription: formData.get('damageDescription'),
    photo: formData.get('photo'),
  };

  const parsed = claimActionSchema.safeParse(rawFormData);

  if (!parsed.success) {
    return { success: false, error: 'Invalid form data.' };
  }

  const { damageDescription, photo } = parsed.data;

  let photoDataUri: string | undefined = undefined;

  if (photo && photo.size > 0) {
    try {
      const buffer = await photo.arrayBuffer();
      const base64 = Buffer.from(buffer).toString('base64');
      photoDataUri = `data:${photo.type};base64,${base64}`;
    } catch (error) {
      console.error('Error processing photo:', error);
      return { success: false, error: 'Failed to process photo.' };
    }
  }

  // Mock location data for the hackathon prototype
  const mockLocationData = {
    farmLocation: '12.9716, 77.5946', // Bangalore
    claimantLocation: '12.9716, 77.5946',
    insuredArea: '12.9716, 77.5946',
  };

  try {
    const result = await verifyClaim({
      ...mockLocationData,
      damageDescription,
      photoDataUri,
    });
    return { success: true, data: result };
  } catch (error) {
    console.error('AI verification failed:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred during verification.';
    return {
      success: false,
      error: `AI Verification Failed: ${errorMessage}`,
    };
  }
}
