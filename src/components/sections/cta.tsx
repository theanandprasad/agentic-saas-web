import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 bg-primary-600 dark:bg-primary-900">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your business with AI agents?
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-100">
            Get started today and discover how our AI agents can automate tasks, enhance productivity, and drive growth for your business.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-primary-700" asChild>
              <Link href="/demo">
                Request Demo
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
} 