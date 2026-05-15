"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { TOOLS_USED } from "@/lib/constants";

export function ToolsSection() {
  return (
    <SectionContainer id="tools" className="bg-surface/30">
      <div className="text-center mb-12">
        <p className="tag-purple inline-block mb-4">Tech Stack</p>
        <h2 className="section-title">AI Tools I Use</h2>
        <p className="section-subtitle">
          I stay current with the best AI tools so you get the highest quality output available.
        </p>
      </div>

      <motion.div
        className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {TOOLS_USED.map((tool) => (
          <motion.span
            key={tool.name}
            variants={fadeInUp}
            className="text-sm text-foreground-muted bg-white/[0.04] border border-white/[0.07] px-4 py-2 rounded-full hover:border-white/20 hover:text-foreground transition-colors duration-200"
          >
            {tool.name}
          </motion.span>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
