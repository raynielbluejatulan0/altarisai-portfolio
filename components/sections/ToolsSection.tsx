"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { TOOLS_USED } from "@/lib/constants";

const CATEGORY_COLORS: Record<string, string> = {
  Image: "bg-white/[0.04] text-white/60 border-white/[0.08]",
  Video: "bg-white/[0.04] text-white/60 border-white/[0.08]",
  Audio: "bg-white/[0.04] text-white/60 border-white/[0.08]",
  Avatar: "bg-white/[0.04] text-white/60 border-white/[0.08]",
  Editing: "bg-white/[0.04] text-white/60 border-white/[0.08]",
  Design: "bg-white/[0.04] text-white/60 border-white/[0.08]",
};

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
          <motion.div
            key={tool.name}
            variants={fadeInUp}
            className={`px-4 py-2 rounded-full border text-sm font-medium ${CATEGORY_COLORS[tool.category] ?? "bg-white/5 text-foreground-muted border-white/10"}`}
          >
            {tool.name}
            <span className="ml-2 text-xs opacity-60">{tool.category}</span>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
