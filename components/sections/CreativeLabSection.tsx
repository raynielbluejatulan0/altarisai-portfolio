"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { CREATIVE_LAB_SLUGS } from "@/lib/constants";
import { getCategory, type MediaItem } from "@/lib/media";
import { trackEvent } from "@/lib/analytics";

/** Up to two pieces per experimental format — range without dilution. */
const PER_CATEGORY = 2;

function labItems(): MediaItem[] {
  return CREATIVE_LAB_SLUGS.flatMap((slug) => {
    const cat = getCategory(slug);
    if (!cat) return [];
    const videosFirst = [...cat.items].sort((a, b) => (a.type === "video" ? -1 : 1) - (b.type === "video" ? -1 : 1));
    return videosFirst.slice(0, PER_CATEGORY);
  });
}

export function CreativeLabSection() {
  const items = labItems();
  if (items.length === 0) return null;

  return (
    <SectionContainer bordered>
      <SectionHeading
        eyebrow="Creative Lab"
        title={
          <>
            Where we test <span className="text-gradient">what&apos;s next.</span>
          </>
        }
        subtitle="Experimental formats and studio R&D: 3D styles, claymation, broadcast looks, and more. The main portfolio shows our commercial work; this is the range behind it."
      />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <GalleryGrid
          items={items}
          density="dense"
          onItemOpen={(item) => trackEvent("creative_lab_open", { category: item.categorySlug, item: item.id })}
        />
      </motion.div>
    </SectionContainer>
  );
}
