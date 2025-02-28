import { MainLayout } from "@/components/layout/main-layout";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Work: How AI Agents Are Transforming Business Operations",
    excerpt:
      "Explore how AI agents are revolutionizing the way businesses operate, from customer service to data analysis and beyond.",
    author: "Alex Johnson",
    role: "CEO & Co-Founder",
    date: "June 15, 2023",
    category: "Industry Insights",
    readTime: "5 min read",
    image: "/images/blog/future-of-work.jpg",
    slug: "future-of-work-ai-agents",
  },
  {
    id: 2,
    title: "5 Ways AI Agents Can Boost Your Customer Support Experience",
    excerpt:
      "Discover how implementing AI agents in your customer support workflow can improve response times, satisfaction rates, and overall experience.",
    author: "Sophia Chen",
    role: "CTO & Co-Founder",
    date: "July 3, 2023",
    category: "Customer Support",
    readTime: "4 min read",
    image: "/images/blog/customer-support.jpg",
    slug: "ai-agents-customer-support",
  },
  {
    id: 3,
    title: "The ROI of AI Agents: Measuring the Business Impact",
    excerpt:
      "Learn how to measure the return on investment of implementing AI agents in your business processes and workflows.",
    author: "Marcus Williams",
    role: "Head of Product",
    date: "July 28, 2023",
    category: "Business Strategy",
    readTime: "7 min read",
    image: "/images/blog/roi-ai-agents.jpg",
    slug: "roi-ai-agents",
  },
  {
    id: 4,
    title: "Building Trust in AI: Transparency and Explainability in AI Agents",
    excerpt:
      "Explore the importance of transparency and explainability in AI systems and how they contribute to building trust with users.",
    author: "Priya Patel",
    role: "Head of AI Research",
    date: "August 12, 2023",
    category: "AI Ethics",
    readTime: "6 min read",
    image: "/images/blog/trust-in-ai.jpg",
    slug: "trust-transparency-ai-agents",
  },
  {
    id: 5,
    title: "AI Agents vs. Traditional Automation: What's the Difference?",
    excerpt:
      "Understand the key differences between AI agents and traditional automation tools, and when to use each for optimal results.",
    author: "Alex Johnson",
    role: "CEO & Co-Founder",
    date: "September 5, 2023",
    category: "Technology",
    readTime: "5 min read",
    image: "/images/blog/ai-vs-automation.jpg",
    slug: "ai-agents-vs-traditional-automation",
  },
  {
    id: 6,
    title: "How to Prepare Your Team for Working with AI Agents",
    excerpt:
      "A practical guide to preparing your team for the integration of AI agents into their daily workflows and processes.",
    author: "Sophia Chen",
    role: "CTO & Co-Founder",
    date: "September 21, 2023",
    category: "Implementation",
    readTime: "8 min read",
    image: "/images/blog/team-preparation.jpg",
    slug: "prepare-team-ai-agents",
  },
];

// Categories for filtering
const categories = [
  "All",
  "Industry Insights",
  "Customer Support",
  "Business Strategy",
  "AI Ethics",
  "Technology",
  "Implementation",
];

export default function BlogPage() {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-neutral-950 py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
              Blog & Resources
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              Insights, guides, and expert perspectives on AI agents and their impact on business.
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
          
          {/* Featured post */}
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="aspect-[2/1] w-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                {/* Placeholder for featured image */}
                <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                  Featured Article
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-neutral-900/0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-x-2 text-sm text-white mb-2">
                  <span className="bg-primary-600 px-2 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span>{blogPosts[0].date}</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {blogPosts[0].title}
                </h2>
                <p className="text-neutral-200 mb-4">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-x-4">
                  <div className="h-10 w-10 rounded-full bg-neutral-200 flex items-center justify-center">
                    <span className="text-neutral-800 font-bold">
                      {blogPosts[0].author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      {blogPosts[0].author}
                    </div>
                    <div className="text-neutral-300 text-sm">
                      {blogPosts[0].role}
                    </div>
                  </div>
                </div>
                <Button className="mt-6 w-full sm:w-auto" asChild>
                  <Link href={`/blog/${blogPosts[0].slug}`}>Read Article</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Blog posts grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(1).map((post) => (
              <div
                key={post.id}
                className="flex flex-col rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden transition-all duration-200 hover:shadow-lg"
              >
                <div className="aspect-[16/9] w-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  {/* Placeholder for post image */}
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {post.title.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-x-2 text-xs text-neutral-600 dark:text-neutral-400 mb-3">
                    <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-x-3">
                      <div className="h-8 w-8 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                        <span className="text-neutral-800 dark:text-neutral-200 font-bold">
                          {post.author.charAt(0)}
                        </span>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-neutral-900 dark:text-neutral-100">
                          {post.author}
                        </div>
                        <div className="text-neutral-600 dark:text-neutral-400 text-xs">
                          {post.role}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto" asChild>
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Newsletter signup */}
          <div className="mt-16 rounded-2xl bg-primary-50 dark:bg-primary-900/20 p-8 md:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Stay updated with our newsletter
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                Get the latest insights on AI agents, industry trends, and tips for implementing AI in your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border-0 py-2.5 px-3.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700 dark:placeholder:text-neutral-500 dark:focus:ring-primary-500"
                />
                <Button type="submit">
                  Subscribe
                </Button>
              </div>
              <p className="mt-4 text-xs text-neutral-600 dark:text-neutral-400">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
} 