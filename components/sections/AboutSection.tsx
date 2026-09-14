"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ABOUT_COMPANY } from "@/lib/constants";

export function AboutSection() {
  return (
    <SectionContainer id="about" bordered>
      <motion.div
        className="mx-auto max-w-3xl text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.span variants={fadeInUp} className="tag inline-block">
          {ABOUT_COMPANY.eyebrow}
        </motion.span>
        <motion.h2 variants={fadeInUp} className="section-title mt-5 text-balance">
          Built for the new era of <span className="text-gradient">creative production.</span>
        </motion.h2>

        <div className="mt-10 space-y-6 text-left sm:text-center">
          {ABOUT_COMPANY.paragraphs.map((paragraph) => (
            <motion.p
              key={paragraph.slice(0, 32)}
              variants={fadeInUp}
              className="text-base leading-relaxed text-foreground-muted sm:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <motion.p
          variants={fadeInUp}
          className="mt-12 font-mono text-xs uppercase tracking-[0.28em] text-accent"
        >
          {ABOUT_COMPANY.closing}
        </motion.p>
      </motion.div>
    </SectionContainer>
  );
}
