import { HeroSection } from "@/components/sections/HeroSection";
import { MarketingStudioSection } from "@/components/sections/MarketingStudioSection";
import { AnimationSection } from "@/components/sections/AnimationSection";
import { CinematicSection } from "@/components/sections/CinematicSection";
import { ImageGallerySection } from "@/components/sections/ImageGallerySection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarketingStudioSection />
      <AnimationSection />
      <CinematicSection />
      <ImageGallerySection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ToolsSection />
      <ContactSection />
    </>
  );
}
