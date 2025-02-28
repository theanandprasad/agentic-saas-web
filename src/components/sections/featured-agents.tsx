import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Sample data for featured agents
const featuredAgents = [
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
];

export function FeaturedAgents() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
            Featured AI Agents
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Explore our most popular AI agents designed to transform your business operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredAgents.map((agent) => (
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
        
        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link href="/agents">View All Agents</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
} 