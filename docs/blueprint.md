# **App Name**: AgriCheck

## Core Features:

- Landing Page: Display a clear, concise overview of AgriSure, highlighting the problem, solution, and impact with a direct call-to-action to submit a claim.
- Claim Submission: Enable farmers to submit claims with necessary details such as name, farm location (using geolocation), crop type, and damage description, along with an option to upload a photo. Form adapts to low-bandwidth conditions.
- Claim Verification Tool: Leverage AI to 'mock' Nokia's Network-as-Code APIs to validate if the farm is within the insured area (Geofencing API) and if the claim is genuine based on farmer presence in the insured zone (Connectivity Insights API). Use a tool to determine approval or flagging for review.
- Real-time Notifications: Display instant claim status updates to farmers via toast messages or pop-ups, informing them of verification and approval status immediately after submission.
- Simple Status Indicators: Use simple icons to denote claim status (Approved, Pending, Rejected) to improve readability. This feature is only available when on the main network.

## Style Guidelines:

- Primary color: Earthy green (#6B8E23), symbolizing growth and agriculture.
- Background color: Very light beige (#F5F5DC), creating a neutral, low-bandwidth friendly base.
- Accent color: Burnt orange (#CC7722), drawing attention to calls-to-action and important notifications.
- Body and headline font: 'PT Sans' (sans-serif), ensuring legibility in varied rural network conditions.
- Use large, simple icons representing crops, insurance processes, and approval status to facilitate understanding for users with varying literacy levels.
- Implement a mobile-first, single-column layout with ample spacing to accommodate touch inputs on smaller screens and ensure content is easily digestible on low-bandwidth connections.
- Minimize animations to conserve bandwidth, using only essential, subtle transitions to indicate state changes (e.g., claim submission confirmation).