import { ClaimForm } from '@/components/ClaimForm';

export default function ClaimPage() {
  return (
    <div className="container mx-auto max-w-2xl py-12 px-4 md:px-6">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold font-headline">Submit a New Claim</h1>
        <p className="text-muted-foreground">
          Fill out the form below to submit your crop insurance claim. Please
          provide accurate information for a speedy verification.
        </p>
      </div>
      <div className="mt-8">
        <ClaimForm />
      </div>
    </div>
  );
}
