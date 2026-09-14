import { HeroSection } from "@/components/sections/HeroSection";
import { ValuePropSection } from "@/components/sections/ValuePropSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { WhoIHelpSection } from "@/components/sections/WhoIHelpSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ClientJourneySection } from "@/components/sections/ClientJourneySection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { StrategyDemoSection } from "@/components/sections/StrategyDemoSection";
import { CreativeLabSection } from "@/components/sections/CreativeLabSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { WhyMeSection } from "@/components/sections/WhyMeSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { ClientFitSection } from "@/components/sections/ClientFitSection";
import { AgenciesSection } from "@/components/sections/AgenciesSection";
import { FoundingSection } from "@/components/sections/FoundingSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQS } from "@/lib/constants";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* WHAT — positioning and proof */}
      <HeroSection />
      <ValuePropSection />
      <WorkSection />
      {/* WHO — audience */}
      <WhoIHelpSection />
      {/* HOW — services, journey, pipeline, thinking */}
      <ServicesSection />
      <ClientJourneySection />
      <WorkflowSection />
      <StrategyDemoSection />
      <CreativeLabSection />
      {/* WHY ALTARIS — company, founder, differentiators */}
      <AboutSection />
      <FounderSection />
      <WhyMeSection />
      <ResultsSection />
      <TestimonialsSection />
      {/* NEXT — engagement paths */}
      <PackagesSection />
      <ClientFitSection />
      <AgenciesSection />
      <FoundingSection />
      <TechStackSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
