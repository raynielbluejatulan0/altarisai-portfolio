import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ImageGallerySection } from "@/components/sections/ImageGallerySection";
import { VideoShowcaseSection } from "@/components/sections/VideoShowcaseSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ImageGallerySection />
      <VideoShowcaseSection />
      <ServicesSection />
      <ToolsSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
