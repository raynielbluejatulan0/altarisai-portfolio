"use client";

import { motion } from "framer-motion";
import { Film, Sparkles } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";

const PLACEHOLDERS = [
  "Cinematic Short Film",
  "Epic Product Reveal",
  "Narrative Brand Story",
  "Cinematic Trailer",
];

export function CinematicSection() {
  return (
    <SectionContainer id="cinematic">
      <div className="text-center mb-12">
        <p className="tag-purple inline-block mb-4">Cinematic AI</p>
        <h2 className="section-title">Cinematic Videos</h2>
        <p className="section-subtitle">
          High-production cinematic and film-style AI videos — dramatic lighting,
          epic scenes, and storytelling-first content.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {PLACEHOLDERS.map((label, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="aspect-video rounded-2xl glow-card flex flex-col items-center justify-center gap-3"
          >
            <div className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
              <Film size={18} className="text-white/25" />
            </div>
            <p className="text-[10px] text-white/25 font-medium text-center px-4">{label}</p>
            <span className="flex items-center gap-1 text-[9px] text-white/15 tracking-widest uppercase">
              <Sparkles size={8} className="text-white/20" />
              Coming Soon
            </span>
          </motion.div>
        ))}
      </motion.div>

      <p className="text-center text-xs text-foreground-dim mt-8">
        Cinematic AI content coming soon — drop files into{" "}
        <code className="text-white/40">public/videos/cinematic/</code>
      </p>
    </SectionContainer>
  );
}
