"use client";

import { motion } from "framer-motion";
import { Wand2, Sparkles } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";

const PLACEHOLDERS = [
  "Motion Graphics",
  "Animated Ad",
  "2D Character Animation",
  "Kinetic Typography",
  "Animated Logo",
  "Explainer Video",
];

export function AnimationSection() {
  return (
    <SectionContainer id="animation" className="bg-surface/20">
      <div className="text-center mb-12">
        <p className="tag-purple inline-block mb-4">AI Animation</p>
        <h2 className="section-title">Animation Studio</h2>
        <p className="section-subtitle">
          Motion graphics, animated ads, and character animations — all AI-generated
          for motion designers, animators, and creative teams.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {PLACEHOLDERS.map((label, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="aspect-square rounded-2xl glow-card flex flex-col items-center justify-center gap-3"
          >
            <div className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
              <Wand2 size={18} className="text-white/25" />
            </div>
            <p className="text-[10px] text-white/25 font-medium text-center px-3 leading-snug">{label}</p>
            <span className="flex items-center gap-1 text-[9px] text-white/15 tracking-widest uppercase">
              <Sparkles size={8} className="text-white/20" />
              Coming Soon
            </span>
          </motion.div>
        ))}
      </motion.div>

      <p className="text-center text-xs text-foreground-dim mt-8">
        Animation content coming soon — drop files into{" "}
        <code className="text-white/40">public/videos/animation/</code>
      </p>
    </SectionContainer>
  );
}
