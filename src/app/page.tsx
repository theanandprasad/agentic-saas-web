import { MainLayout } from "@/components/layout/main-layout";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { FeaturedAgents } from "@/components/sections/featured-agents";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <FeaturedAgents />
      <Testimonials />
      <CTA />
    </MainLayout>
  );
}
