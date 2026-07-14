import { HeroSection } from "@/components/sections/HeroSection";
import { ValuePropSection } from "@/components/sections/ValuePropSection";
import { WhoIHelpSection } from "@/components/sections/WhoIHelpSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioPreviewSection } from "@/components/sections/PortfolioPreviewSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { WhyMeSection } from "@/components/sections/WhyMeSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuePropSection />
      <WhoIHelpSection />
      <ServicesSection />
      <PortfolioPreviewSection />
      <WorkflowSection />
      <WhyMeSection />
      <TechStackSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
