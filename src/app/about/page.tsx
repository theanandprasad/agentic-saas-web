import { MainLayout } from "@/components/layout/main-layout";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Sample team data
const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Co-Founder",
    bio: "Alex has over 15 years of experience in AI and machine learning. Previously led AI research at Google.",
    image: "/images/team/alex.jpg",
  },
  {
    name: "Sophia Chen",
    role: "CTO & Co-Founder",
    bio: "Sophia is an expert in natural language processing and conversational AI. Former lead engineer at OpenAI.",
    image: "/images/team/sophia.jpg",
  },
  {
    name: "Marcus Williams",
    role: "Head of Product",
    bio: "Marcus brings 10+ years of product management experience from leading tech companies like Microsoft and Amazon.",
    image: "/images/team/marcus.jpg",
  },
  {
    name: "Priya Patel",
    role: "Head of AI Research",
    bio: "Priya holds a PhD in Computer Science and has published numerous papers on agent-based AI systems.",
    image: "/images/team/priya.jpg",
  },
];

// Company values
const values = [
  {
    name: "Innovation",
    description: "We're constantly pushing the boundaries of what's possible with AI technology.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
  {
    name: "Customer Success",
    description: "We measure our success by the success of our customers. Their goals are our goals.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
        />
      </svg>
    ),
  },
  {
    name: "Transparency",
    description: "We believe in being open and honest with our customers, partners, and each other.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    name: "Ethical AI",
    description: "We're committed to developing AI that is ethical, fair, and beneficial for all.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-neutral-950 py-24">
        <Container>
          {/* Hero section */}
          <div className="mx-auto max-w-3xl text-center mb-24">
            <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
              Our Mission
            </h1>
            <p className="mt-6 text-xl leading-8 text-neutral-600 dark:text-neutral-400">
              We're on a mission to democratize AI and make intelligent agents accessible to businesses of all sizes. Our goal is to empower organizations to leverage the power of AI to automate tasks, enhance productivity, and drive growth.
            </p>
          </div>
          
          {/* Company story */}
          <div className="mx-auto max-w-3xl mb-24">
            <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p>
                Founded in 2020, AI Agents began with a simple idea: make powerful AI accessible to everyone. Our founders, Alex Johnson and Sophia Chen, saw that while large enterprises had the resources to build custom AI solutions, smaller businesses were being left behind.
              </p>
              <p>
                They set out to create a platform that would level the playing field, allowing businesses of all sizes to harness the power of AI without needing specialized expertise or massive budgets.
              </p>
              <p>
                What started as a small team working out of a co-working space has grown into a global company with offices in San Francisco, London, and Singapore. Today, we serve thousands of customers across various industries, helping them transform their operations with intelligent AI agents.
              </p>
              <p>
                Despite our growth, our mission remains the same: to democratize AI and make it accessible to all businesses. We believe that AI should be a tool for everyone, not just tech giants and enterprises with deep pockets.
              </p>
            </div>
          </div>
          
          {/* Values section */}
          <div className="mx-auto max-w-4xl mb-24">
            <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl mb-8 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {values.map((value, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                      {value.name}
                    </h3>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Team section */}
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl mb-8 text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto h-40 w-40 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden mb-4 flex items-center justify-center">
                    {/* Placeholder for team member image */}
                    <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA section */}
          <div className="mx-auto max-w-3xl mt-24 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl mb-6">
              Join Our Team
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
              We're always looking for talented individuals who are passionate about AI and want to make a difference.
            </p>
            <Button size="lg" asChild>
              <Link href="/careers">View Open Positions</Link>
            </Button>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
} 