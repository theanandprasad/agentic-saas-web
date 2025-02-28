import { MainLayout } from "@/components/layout/main-layout";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-neutral-950 py-24">
        <Container>
          <div className="mx-auto max-w-md">
            <div className="text-center mb-8">
              <h1 className="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                Reset your password
              </h1>
              <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                Enter your email address and we'll send you a link to reset your password.
              </p>
            </div>
            
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100"
                  >
                    Email Address
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700 dark:placeholder:text-neutral-500 dark:focus:ring-primary-500 sm:text-sm sm:leading-6"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <Button type="submit" className="w-full">
                    Send reset link
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
              Remember your password?{" "}
              <Link
                href="/login"
                className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Back to login
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
} 