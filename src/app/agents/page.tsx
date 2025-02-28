import { MainLayout } from "@/components/layout/main-layout";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Sample data for all agents
const agents = [
  {
    id: 1,
    name: "Data Analyst Agent",
    description: "Analyze complex datasets and generate insights automatically. Perfect for business intelligence and data-driven decision making.",
    image: "/images/agents/data-analyst.png",
    category: "Analytics",
    href: "/agents/data-analyst",
  },
  {
    id: 2,
    name: "Customer Support Agent",
    description: "Provide 24/7 customer support with intelligent responses and issue resolution. Integrates with your existing support systems.",
    image: "/images/agents/customer-support.png",
    category: "Support",
    href: "/agents/customer-support",
  },
  {
    id: 3,
    name: "Content Creator Agent",
    description: "Generate high-quality content for your marketing needs, from blog posts to social media updates and email campaigns.",
    image: "/images/agents/content-creator.png",
    category: "Marketing",
    href: "/agents/content-creator",
  },
  {
    id: 4,
    name: "Sales Assistant Agent",
    description: "Qualify leads, schedule meetings, and follow up with prospects automatically. Boost your sales team's productivity.",
    image: "/images/agents/sales-assistant.png",
    category: "Sales",
    href: "/agents/sales-assistant",
  },
  {
    id: 5,
    name: "Research Agent",
    description: "Conduct comprehensive research on any topic, summarize findings, and generate reports with citations.",
    image: "/images/agents/research.png",
    category: "Research",
    href: "/agents/research",
  },
  {
    id: 6,
    name: "HR Assistant Agent",
    description: "Streamline HR processes including recruitment, onboarding, and employee support with intelligent automation.",
    image: "/images/agents/hr-assistant.png",
    category: "Human Resources",
    href: "/agents/hr-assistant",
  },
  {
    id: 7,
    name: "Project Manager Agent",
    description: "Track project progress, assign tasks, and generate status reports automatically. Keep your projects on schedule.",
    image: "/images/agents/project-manager.png",
    category: "Project Management",
    href: "/agents/project-manager",
  },
  {
    id: 8,
    name: "Financial Analyst Agent",
    description: "Analyze financial data, generate reports, and provide insights for better financial decision-making.",
    image: "/images/agents/financial-analyst.png",
    category: "Finance",
    href: "/agents/financial-analyst",
  },
];

// Categories for filtering
const categories = [
  "All",
  "Analytics",
  "Support",
  "Marketing",
  "Sales",
  "Research",
  "Human Resources",
  "Project Management",
  "Finance",
];

export default function AgentsPage() {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-neutral-950 py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
              AI Agents for Every Business Need
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              Explore our comprehensive collection of AI agents designed to transform your business operations.
            </p>
          </div>
          
          {/* Category filters - static for now, would be interactive with client components */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  category === "All"
                    ? "bg-primary-600 text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Agents grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {agents.map((agent) => (
              <Card key={agent.id} className="flex flex-col h-full transition-all duration-200 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-center overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800 h-48 relative">
                    {/* Placeholder for agent image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-primary-100 dark:bg-primary-900/20">
                      <span className="text-primary-600 dark:text-primary-400 text-4xl font-bold">{agent.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-900/30 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:text-primary-300">
                      {agent.category}
                    </span>
                  </div>
                  <CardTitle className="mt-4">{agent.name}</CardTitle>
                  <CardDescription>{agent.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-4">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={agent.href}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    </MainLayout>
  );
} 