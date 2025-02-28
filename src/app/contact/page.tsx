import { MainLayout } from "@/components/layout/main-layout";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-neutral-950 py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-16">
              <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
                Contact Us
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                Have questions about our AI agents? Our team is here to help. Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                  Get in Touch
                </h2>
                <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-400">
                  Our team of AI experts is ready to answer your questions and help you find the right solution for your business needs.
                </p>
                
                <div className="mt-8 space-y-6">
                  <div className="flex gap-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-primary-600 dark:text-primary-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                        Email
                      </h3>
                      <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                        info@aiagents.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-primary-600 dark:text-primary-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                        Phone
                      </h3>
                      <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-primary-600 dark:text-primary-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                        Office
                      </h3>
                      <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                        123 AI Street, San Francisco, CA 94107
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <form className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700 dark:placeholder:text-neutral-500 dark:focus:ring-primary-500 sm:text-sm sm:leading-6"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700 dark:placeholder:text-neutral-500 dark:focus:ring-primary-500 sm:text-sm sm:leading-6"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100"
                    >
                      Company
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
                  
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100"
                    >
                      Message
                    </label>
                    <div className="mt-2">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700 dark:placeholder:text-neutral-500 dark:focus:ring-primary-500 sm:text-sm sm:leading-6"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
} 