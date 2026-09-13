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
