'use client';

import Link from 'next/link';
import { Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg"
          aria-label="AgriCheck Home"
        >
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-headline">AgriCheck</span>
        </Link>
        <div className="flex items-center gap-4">
          <SignedIn>
            <Button asChild variant="outline">
              <Link href="/claim">Submit Claim</Link>
            </Button>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2">
              <Button asChild variant="ghost">
                <SignInButton />
              </Button>
              <Button asChild>
                <SignUpButton />
              </Button>
            </div>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
