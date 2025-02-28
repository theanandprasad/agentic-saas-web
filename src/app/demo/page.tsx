import { MainLayout } from "@/components/layout/main-layout";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function DemoPage() {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-neutral-950 py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-16">
              <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
                Request a Demo
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                See our AI agents in action with a personalized demo tailored to your business needs. Fill out the form below and our team will get in touch to schedule your demo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                  What to Expect
                </h2>
                <p className="mt-4 leading-7 text-neutral-600 dark:text-neutral-400">
                  During your personalized demo, our experts will:
                </p>
                
                <ul className="mt-8 space-y-6">
                  <li className="flex gap-x-4">
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
                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                        Understand Your Needs
                      </h3>
                      <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                        We'll discuss your business challenges and goals to identify how our AI agents can help.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-x-4">
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
                          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                        Live Product Demo
                      </h3>
                      <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                        See our AI agents platform in action with real-world examples relevant to your industry.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-x-4">
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
                          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                        Customization Options
                      </h3>
                      <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                        Explore how our AI agents can be customized to meet your specific business requirements.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-x-4">
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
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                        Pricing & ROI Discussion
                      </h3>
                      <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                        Get a clear understanding of our pricing model and the potential return on investment for your business.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <form className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8">
                <div className="space-y-6">
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
                      Work Email
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700 dark:placeholder:text-neutral-500 dark:focus:ring-primary-500 sm:text-sm sm:leading-6"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100"
                    >
                      Company Name
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
                      htmlFor="jobTitle"
                      className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100"
                    >
                      Job Title
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="jobTitle"
                        id="jobTitle"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700 dark:placeholder:text-neutral-500 dark:focus:ring-primary-500 sm:text-sm sm:leading-6"
                        placeholder="Your job title"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label
                      htmlFor="companySize"
                      className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100"
                    >
                      Company Size
                    </label>
                    <div className="mt-2">
                      <select
                        id="companySize"
                        name="companySize"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700 dark:focus:ring-primary-500 sm:text-sm sm:leading-6"
                      >
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="501-1000">501-1000 employees</option>
                        <option value="1001+">1001+ employees</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label
                      htmlFor="interests"
                      className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100"
                    >
                      Which AI agents are you interested in?
                    </label>
                    <div className="mt-2">
                      <select
                        id="interests"
                        name="interests"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700 dark:focus:ring-primary-500 sm:text-sm sm:leading-6"
                      >
                        <option value="">Select your interest</option>
                        <option value="customer-support">Customer Support Agent</option>
                        <option value="data-analyst">Data Analyst Agent</option>
                        <option value="content-creator">Content Creator Agent</option>
                        <option value="sales-assistant">Sales Assistant Agent</option>
                        <option value="multiple">Multiple Agents</option>
                        <option value="not-sure">Not Sure Yet</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100"
                    >
                      Additional Information
                    </label>
                    <div className="mt-2">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700 dark:placeholder:text-neutral-500 dark:focus:ring-primary-500 sm:text-sm sm:leading-6"
                        placeholder="Tell us about your specific needs or questions"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        className="h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-600 dark:border-neutral-700 dark:focus:ring-primary-500"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label htmlFor="privacy" className="text-neutral-600 dark:text-neutral-400">
                        I agree to the{" "}
                        <a href="#" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
                          privacy policy
                        </a>{" "}
                        and{" "}
                        <a href="#" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
                          terms of service
                        </a>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <Button type="submit" className="w-full">
                      Request Demo
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