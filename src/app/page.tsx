import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ShieldOff, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                  AgriSure – Smart Crop Insurance
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Fast, Fair & Fraud-Free Insurance for Farmers. Leveraging
                  cutting-edge technology to verify claims instantly and ensure
                  you get paid when you need it most.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/claim">
                    Submit Claim
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <Image
              src="https://picsum.photos/600/400"
              width="600"
              height="400"
              alt="Hero"
              data-ai-hint="farm landscape"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <ShieldOff className="h-8 w-8 text-destructive" />
                  The Problem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Traditional crop insurance claims are slow, prone to fraud,
                  and require lengthy manual verification, delaying critical
                  payouts to farmers when they are most vulnerable.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <Sparkles className="h-8 w-8 text-primary" />
                  Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  AgriCheck uses AI and Network-as-Code APIs to automate claim
                  verification. We instantly check farm location and claimant
                  presence, ensuring legitimate claims are processed in minutes, not weeks.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  <TrendingUp className="h-8 w-8 text-accent" />
                  The Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By providing fast, transparent, and reliable insurance
                  payouts, we empower farmers, enhance financial stability in
                  rural communities, and build a more resilient agricultural
                  sector.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="w-full py-6 px-4 md:px-6 border-t bg-card">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AgriCheck. A Hackathon Project.</p>
        </div>
      </footer>
    </div>
  );
}
