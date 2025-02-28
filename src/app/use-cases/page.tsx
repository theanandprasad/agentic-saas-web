import { MainLayout } from "@/components/layout/main-layout";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Sample use cases data
const useCases = [
  {
    id: 1,
    title: "Customer Support Automation",
    description:
      "Implement AI agents to handle customer inquiries 24/7, reducing response times and improving customer satisfaction.",
    industry: "E-commerce",
    results: [
      "85% reduction in response time",
      "24/7 customer support coverage",
      "40% decrease in support costs",
      "92% customer satisfaction rating",
    ],
    href: "/use-cases/customer-support",
  },
  {
    id: 2,
    title: "Data Analysis and Insights",
    description:
      "Deploy AI agents to analyze large datasets, identify patterns, and generate actionable business insights automatically.",
    industry: "Finance",
    results: [
      "70% faster data analysis",
      "Identification of previously hidden patterns",
      "35% increase in data-driven decisions",
      "50% reduction in analysis costs",
    ],
    href: "/use-cases/data-analysis",
  },
  {
    id: 3,
    title: "Content Creation at Scale",
    description:
      "Use AI agents to generate high-quality content for marketing campaigns, social media, and website copy.",
    industry: "Marketing",
    results: [
      "10x increase in content production",
      "65% reduction in content creation costs",
      "Consistent brand voice across all channels",
      "30% increase in engagement metrics",
    ],
    href: "/use-cases/content-creation",
  },
  {
    id: 4,
    title: "Sales Process Automation",
    description:
      "Implement AI agents to qualify leads, schedule meetings, and follow up with prospects, freeing up sales teams to focus on closing deals.",
    industry: "Sales",
    results: [
      "45% increase in qualified leads",
      "60% reduction in administrative tasks",
      "28% higher conversion rates",
      "3x more customer touchpoints",
    ],
    href: "/use-cases/sales-automation",
  },
  {
    id: 5,
    title: "HR and Recruitment Optimization",
    description:
      "Deploy AI agents to screen resumes, schedule interviews, and answer candidate questions, streamlining the recruitment process.",
    industry: "Human Resources",
    results: [
      "75% reduction in time-to-hire",
      "50% decrease in recruitment costs",
      "Improved candidate experience",
      "More diverse candidate pool",
    ],
    href: "/use-cases/hr-recruitment",
  },
  {
    id: 6,
    title: "Research and Development Acceleration",
    description:
      "Use AI agents to conduct literature reviews, analyze research data, and generate reports, accelerating R&D processes.",
    industry: "Healthcare",
    results: [
      "65% faster research cycles",
      "Comprehensive analysis of existing literature",
      "Identification of new research opportunities",
      "40% reduction in research costs",
    ],
    href: "/use-cases/research-development",
  },
];

// Industries for filtering
const industries = [
  "All Industries",
  "E-commerce",
  "Finance",
  "Marketing",
  "Sales",
  "Human Resources",
  "Healthcare",
];

export default function UseCasesPage() {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-neutral-950 py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
              AI Agents in Action
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              Discover how businesses across industries are using our AI agents to transform their operations, enhance productivity, and drive growth.
            </p>
          </div>
          
          {/* Industry filters - static for now, would be interactive with client components */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {industries.map((industry) => (
              <button
                key={industry}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  industry === "All Industries"
                    ? "bg-primary-600 text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
          
          {/* Use cases grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <div
                key={useCase.id}
                className="flex flex-col rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900 overflow-hidden transition-all duration-200 hover:shadow-lg"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-900/30 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:text-primary-300">
                      {useCase.industry}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    {useCase.title}
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    {useCase.description}
                  </p>
                  <div className="mt-auto">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                      Key Results:
                    </h3>
                    <ul className="space-y-1">
                      {useCase.results.map((result, index) => (
                        <li
                          key={index}
                          className="flex items-start text-sm text-neutral-600 dark:text-neutral-400"
                        >
                          <svg
                            className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-2">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-auto p-6 pt-0">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={useCase.href}>Read Full Case Study</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA section */}
          <div className="mt-16 rounded-2xl bg-primary-50 dark:bg-primary-900/20 p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Ready to transform your business with AI agents?
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you identify the right AI agents for your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/demo">Request a Demo</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
} 