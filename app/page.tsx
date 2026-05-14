import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { MarketingStudioSection } from "@/components/sections/MarketingStudioSection";
import { ImageGallerySection } from "@/components/sections/ImageGallerySection";
import { CinematicSection } from "@/components/sections/CinematicSection";
import { AnimationSection } from "@/components/sections/AnimationSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MarketingStudioSection />
      <ImageGallerySection />
      <CinematicSection />
      <AnimationSection />
      <ServicesSection />
      <ToolsSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
