"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { RESULTS_FRAMEWORK } from "@/lib/constants";

/**
 * Future-ready results section. Becomes the case-study/results library once
 * verified client performance data exists. Until then it states the standard
 * honestly — no fabricated ROAS, CTR, CPA, or revenue numbers.
 */
export function ResultsSection() {
  return (
    <SectionContainer bordered>
      <motion.div
        className="mx-auto max-w-2xl text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.span variants={fadeInUp} className="tag inline-block">
          {RESULTS_FRAMEWORK.eyebrow}
        </motion.span>
        <motion.h2 variants={fadeInUp} className="section-title mt-5 text-balance">
          Built to perform. Measured by <span className="text-gradient">what happens after launch.</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
          {RESULTS_FRAMEWORK.copy}
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-8 inline-flex items-center gap-2.5 border border-white/[0.08] bg-white/[0.02] px-5 py-2.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground-dim"
        >
          <BarChart3 className="h-3.5 w-3.5 text-accent/70" aria-hidden />
          {RESULTS_FRAMEWORK.note}
        </motion.p>
      </motion.div>
    </SectionContainer>
  );
}
