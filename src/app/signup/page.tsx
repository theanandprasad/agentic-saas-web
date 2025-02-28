import { MainLayout } from "@/components/layout/main-layout";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignupPage() {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-neutral-950 py-24">
        <Container>
          <div className="mx-auto max-w-md">
            <div className="text-center mb-8">
              <h1 className="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                Create Your Account
              </h1>
              <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                Get started with your 14-day free trial. No credit card required.
              </p>
            </div>
            
            <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8">
              <div className="space-y-6">
                {/* Social sign-up options */}
                <div className="space-y-3">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335" />
                      <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4" />
                      <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05" />
                      <path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853" />
                    </svg>
                    <span>Sign up with Google</span>
                  </Button>
                  
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.879C9.036 23.721 9 23.451 9 23.121V21.121C8.502 21.121 7.592 21.121 7.372 21.121C6.557 21.121 5.802 20.782 5.448 20.106C5.077 19.388 5.018 18.276 4.178 17.621C3.883 17.381 4.064 17.105 4.407 17.132C5.052 17.308 5.571 17.775 6.063 18.435C6.552 19.095 6.784 19.229 7.723 19.229C8.171 19.229 8.858 19.202 9.504 19.094C9.84 18.298 10.454 17.567 11.193 17.254C7.09 16.723 5.152 14.67 5.152 11.999C5.152 10.856 5.635 9.758 6.464 8.815C6.178 7.766 5.753 5.785 6.565 4.974C8.297 4.974 9.39 6.233 9.699 6.61C10.609 6.262 11.619 6.06 12.677 6.06C13.738 6.06 14.752 6.262 15.665 6.612C15.972 6.237 17.065 4.974 18.8 4.974C19.613 5.785 19.186 7.77 18.897 8.817C19.723 9.758 20.203 10.854 20.203 11.999C20.203 14.671 18.262 16.725 14.154 17.253C15.2 17.714 16 19.045 16 20.229V23.121C16 23.329 15.977 23.499 15.951 23.666C20.825 21.868 24 17.36 24 12C24 5.373 18.627 0 12 0Z" />
                    </svg>
                    <span>Sign up with Facebook</span>
                  </Button>
                  
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12C0 17.623 3.872 22.328 9.092 23.979C9.036 23.721 9 23.451 9 23.121V21.121C8.502 21.121 7.592 21.121 7.372 21.121C6.557 21.121 5.802 20.782 5.448 20.106C5.077 19.388 5.018 18.276 4.178 17.621C3.883 17.381 4.064 17.105 4.407 17.132C5.052 17.308 5.571 17.775 6.063 18.435C6.552 19.095 6.784 19.229 7.723 19.229C8.171 19.229 8.858 19.202 9.504 19.094C9.84 18.298 10.454 17.567 11.193 17.254C7.09 16.723 5.152 14.67 5.152 11.999C5.152 10.856 5.635 9.758 6.464 8.815C6.178 7.766 5.753 5.785 6.565 4.974C8.297 4.974 9.39 6.233 9.699 6.61C10.609 6.262 11.619 6.06 12.677 6.06C13.738 6.06 14.752 6.262 15.665 6.612C15.972 6.237 17.065 4.974 18.8 4.974C19.613 5.785 19.186 7.77 18.897 8.817C19.723 9.758 20.203 10.854 20.203 11.999C20.203 14.671 18.262 16.725 14.154 17.253C15.2 17.714 16 19.045 16 20.229V23.121C16 23.329 15.977 23.499 15.951 23.666C20.825 21.868 24 17.36 24 12C24 5.373 18.627 0 12 0Z" />
                    </svg>
                    <span>Sign up with GitHub</span>
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-neutral-300 dark:border-neutral-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-neutral-500 dark:bg-neutral-950 dark:text-neutral-400">
                      Or continue with
                    </span>
                  </div>
                </div>
                
                {/* Email sign-up form */}
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100"
                    >
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700 dark:placeholder:text-neutral-500 dark:focus:ring-primary-500 sm:text-sm sm:leading-6"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  
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
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700 dark:placeholder:text-neutral-500 dark:focus:ring-primary-500 sm:text-sm sm:leading-6"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100"
                    >
                      Company Name (Optional)
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700 dark:placeholder:text-neutral-500 dark:focus:ring-primary-500 sm:text-sm sm:leading-6"
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-600 dark:border-neutral-700 dark:focus:ring-primary-500"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label htmlFor="terms" className="text-neutral-600 dark:text-neutral-400">
                        I agree to the{" "}
                        <a href="#" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
                          terms of service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
                          privacy policy
                        </a>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <Button type="submit" className="w-full">
                      Create Account
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Sign in
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
} 