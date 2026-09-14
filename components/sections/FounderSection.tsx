"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInRight } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { FOUNDER } from "@/lib/constants";

export function FounderSection() {
  return (
    <SectionContainer bordered>
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
        {/* Portrait */}
        <motion.figure
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto w-full max-w-[300px] lg:max-w-none"
        >
          <div className="relative overflow-hidden border border-white/10" style={{ aspectRatio: "4 / 5" }}>
            <Image
              src={FOUNDER.photo}
              alt={`${FOUNDER.name}, ${FOUNDER.title}`}
              fill
              sizes="(max-width: 1024px) 300px, 340px"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="mt-4 border-l-2 border-accent/60 pl-4">
            <p className="font-display text-lg font-bold text-foreground">{FOUNDER.name}</p>
            <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground-dim">
              {FOUNDER.title}
            </p>
          </figcaption>
        </motion.figure>

        {/* Copy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span variants={fadeInUp} className="tag inline-block">
            The Founder
          </motion.span>
          <motion.h2 variants={fadeInUp} className="section-title mt-5 text-balance">
            Better creative comes from <span className="text-gradient">better thinking.</span>
          </motion.h2>
          {FOUNDER.paragraphs.map((paragraph) => (
            <motion.p
              key={paragraph.slice(0, 24)}
              variants={slideInRight}
              className="mt-6 text-base leading-relaxed text-foreground-muted"
            >
              {paragraph}
            </motion.p>
          ))}
          <motion.p
            variants={fadeInUp}
            className="mt-9 font-mono text-xs uppercase tracking-[0.28em] text-accent"
          >
            {FOUNDER.closing}
          </motion.p>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
