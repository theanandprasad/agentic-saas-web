import { MainLayout } from "@/components/layout/main-layout";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    price: "$49",
    description: "Perfect for small businesses just getting started with AI.",
    features: [
      "Access to 3 AI agents",
      "5,000 agent interactions per month",
      "Basic analytics",
      "Email support",
      "1 user account",
    ],
    cta: "Get Started",
    mostPopular: false,
  },
  {
    name: "Professional",
    id: "tier-professional",
    price: "$99",
    description: "Ideal for growing businesses with more advanced needs.",
    features: [
      "Access to 10 AI agents",
      "25,000 agent interactions per month",
      "Advanced analytics",
      "Priority email support",
      "5 user accounts",
      "Custom agent workflows",
    ],
    cta: "Get Started",
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    price: "Custom",
    description: "For large organizations with complex requirements.",
    features: [
      "Access to all AI agents",
      "Unlimited agent interactions",
      "Enterprise-grade analytics",
      "24/7 phone and email support",
      "Unlimited user accounts",
      "Custom agent development",
      "Dedicated account manager",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    mostPopular: false,
  },
];

export default function PricingPage() {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-neutral-950 py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              Choose the plan that's right for your business. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`flex flex-col rounded-3xl p-8 ring-1 ${
                  tier.mostPopular
                    ? "bg-primary-600 ring-primary-600 dark:bg-primary-900 dark:ring-primary-900"
                    : "ring-neutral-200 dark:ring-neutral-700"
                }`}
              >
                <div className="mb-8">
                  <h3
                    className={`text-lg font-semibold leading-8 ${
                      tier.mostPopular ? "text-white" : "text-neutral-900 dark:text-neutral-100"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular && (
                    <p className="mt-1 text-sm leading-6 text-primary-200">Most popular</p>
                  )}
                  <p
                    className={`mt-4 text-4xl font-bold tracking-tight ${
                      tier.mostPopular ? "text-white" : "text-neutral-900 dark:text-neutral-100"
                    }`}
                  >
                    {tier.price}
                    {tier.price !== "Custom" && (
                      <span
                        className={`text-sm font-semibold leading-6 ${
                          tier.mostPopular ? "text-primary-200" : "text-neutral-600 dark:text-neutral-400"
                        }`}
                      >
                        /month
                      </span>
                    )}
                  </p>
                  <p
                    className={`mt-6 text-base leading-7 ${
                      tier.mostPopular ? "text-primary-100" : "text-neutral-600 dark:text-neutral-400"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>
                <div className="mt-2 mb-8 space-y-2">
                  {tier.features.map((feature) => (
                    <div
                      key={feature}
                      className={`flex gap-x-3 ${
                        tier.mostPopular ? "text-primary-100" : "text-neutral-600 dark:text-neutral-400"
                      }`}
                    >
                      <svg
                        className={tier.mostPopular ? "text-white" : "text-primary-600 dark:text-primary-400"}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 12l4.7 4.5 9.3-9"
                        />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <Button
                    className={`w-full ${
                      tier.mostPopular
                        ? "bg-white text-primary-600 hover:bg-primary-50"
                        : ""
                    }`}
                    variant={tier.mostPopular ? "default" : "outline"}
                    asChild
                  >
                    <Link href={tier.id === "tier-enterprise" ? "/contact" : "/signup"}>
                      {tier.cta}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  Can I switch plans later?
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  What happens after my trial ends?
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  After your 14-day trial, you'll be automatically switched to your selected plan. We'll send you a reminder before this happens.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  Do you offer custom solutions?
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  Yes, our Enterprise plan includes custom agent development tailored to your specific business needs.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
} 