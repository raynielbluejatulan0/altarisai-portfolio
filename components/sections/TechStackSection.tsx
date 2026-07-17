"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainerFast } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TECH_STACK } from "@/lib/constants";

export function TechStackSection() {
  return (
    <SectionContainer bordered>
      <SectionHeading
        eyebrow="The Production Pipeline"
        title={
          <>
            Best-in-class tools, <span className="text-gradient">one seamless pipeline.</span>
          </>
        }
        subtitle="The stack isn't the point. The output is. Each tool covers one stage of production, curated and swapped as the state of the art moves."
      />

      <motion.div
        className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {TECH_STACK.map((tool) => (
          <motion.div
            key={tool.name}
            variants={fadeInUp}
            className="glow-card flex items-center justify-between gap-4 rounded-2xl px-6 py-5"
          >
            <span className="font-display text-base font-bold text-foreground">{tool.name}</span>
            <span className="text-right text-xs leading-snug text-foreground-dim">{tool.role}</span>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
