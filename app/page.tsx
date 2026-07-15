import { HeroSection } from "@/components/sections/HeroSection";
import { ValuePropSection } from "@/components/sections/ValuePropSection";
import { WhoIHelpSection } from "@/components/sections/WhoIHelpSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { WhyMeSection } from "@/components/sections/WhyMeSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuePropSection />
      <WhoIHelpSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <WorkflowSection />
      <WhyMeSection />
      <TechStackSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
