import { MainLayout } from "@/components/layout/main-layout";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// FAQ data structure
const faqs = [
  {
    question: "What are AI agents?",
    answer:
      "AI agents are autonomous software programs powered by artificial intelligence that can perform specific tasks or functions on behalf of users. Our AI agents are designed to automate business processes, analyze data, generate content, provide customer support, and more.",
  },
  {
    question: "How do AI agents differ from traditional software?",
    answer:
      "Unlike traditional software that requires explicit programming for every scenario, AI agents can learn from data and experiences, adapt to new situations, and make decisions with minimal human intervention. They can understand natural language, recognize patterns, and continuously improve their performance over time.",
  },
  {
    question: "Do I need technical expertise to use your AI agents?",
    answer:
      "No, our platform is designed to be user-friendly and accessible to businesses of all technical levels. We provide intuitive interfaces, pre-built templates, and comprehensive documentation to help you get started quickly. Our team also offers onboarding support to ensure a smooth implementation.",
  },
  {
    question: "Can AI agents integrate with my existing systems?",
    answer:
      "Yes, our AI agents are built with integration in mind. We offer a wide range of pre-built connectors for popular business tools and platforms, as well as a robust API for custom integrations. Our agents can work seamlessly with your CRM, marketing tools, customer support systems, and more.",
  },
  {
    question: "How secure is your AI agents platform?",
    answer:
      "Security is a top priority for us. Our platform is built with enterprise-grade security features, including end-to-end encryption, role-based access controls, and regular security audits. We comply with industry standards and regulations to ensure your data remains protected at all times.",
  },
  {
    question: "How long does it take to implement AI agents?",
    answer:
      "Implementation time varies depending on the complexity of your requirements and the number of agents you're deploying. Simple implementations can be completed in a few days, while more complex scenarios might take a few weeks. Our team works closely with you to ensure a smooth and efficient implementation process.",
  },
  {
    question: "Can I customize the AI agents for my specific needs?",
    answer:
      "Absolutely. Our platform offers extensive customization options to tailor AI agents to your specific business requirements. You can customize agent behaviors, workflows, responses, and integrations. For enterprise customers, we also offer custom agent development services.",
  },
  {
    question: "How do you handle data privacy?",
    answer:
      "We take data privacy very seriously. Our platform is designed with privacy-by-design principles, and we only collect and process the data necessary for the agents to function. We comply with GDPR, CCPA, and other relevant data protection regulations. You maintain ownership of your data at all times.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer multiple tiers of support, depending on your plan. All customers receive access to our comprehensive documentation, knowledge base, and community forums. Professional and Enterprise plans include email support, with Enterprise customers also receiving priority phone support and a dedicated account manager.",
  },
  {
    question: "How do you measure the performance of AI agents?",
    answer:
      "Our platform includes robust analytics and reporting tools that track key performance metrics for each agent. These metrics include task completion rates, accuracy, response times, user satisfaction, and more. You can access these metrics through customizable dashboards and generate detailed reports.",
  },
  {
    question: "Can I try the platform before committing?",
    answer:
      "Yes, we offer a 14-day free trial that gives you full access to our platform and a selection of AI agents. This allows you to experience the benefits firsthand and determine if our solution is right for your business. No credit card is required to start your trial.",
  },
  {
    question: "How often do you update your AI agents?",
    answer:
      "We continuously improve our AI agents with regular updates that enhance their capabilities, performance, and security. Major updates are typically released quarterly, with smaller improvements and bug fixes deployed more frequently. All updates are designed to be non-disruptive to your operations.",
  },
];

export default function FAQPage() {
  return (
    <MainLayout>
      <div className="bg-white dark:bg-neutral-950 py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                Find answers to common questions about our AI agents platform. If you can't find what you're looking for, feel free to contact our support team.
              </p>
            </div>
            
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden"
                >
                  <div className="bg-neutral-50 dark:bg-neutral-900 px-6 py-4">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Still have questions?
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                Our team is ready to help you with any questions you may have about our AI agents platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/demo">Request a Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
} 