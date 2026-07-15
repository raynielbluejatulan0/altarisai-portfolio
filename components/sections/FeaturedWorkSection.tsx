"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { getFeaturedItems, TOTAL_CATEGORIES, TOTAL_ITEMS } from "@/lib/media";

const featured = getFeaturedItems(8);

export function FeaturedWorkSection() {
  return (
    <SectionContainer id="work" bordered>
      <SectionHeading
        eyebrow="Featured Work"
        title={
          <>
            A cross-section of what I <span className="text-gradient">create.</span>
          </>
        }
        subtitle={`One highlight from each style — UGC, VSL, 3D animation, product commercials and more. ${TOTAL_ITEMS} pieces across ${TOTAL_CATEGORIES} categories in the full portfolio.`}
      />

      <GalleryGrid items={featured} density="dense" priorityCount={4} />

      <motion.div
        className="mt-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Button href="/portfolio" variant="outline" size="lg">
          View Full Portfolio
        </Button>
      </motion.div>
    </SectionContainer>
  );
}
