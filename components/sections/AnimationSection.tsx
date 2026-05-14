"use client";

import { motion } from "framer-motion";
import { Wand2, Sparkles } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";

const PLACEHOLDERS = [
  { label: "Motion Graphics" },
  { label: "Animated Ad" },
  { label: "2D Character Animation" },
  { label: "Kinetic Typography" },
  { label: "Animated Logo" },
  { label: "Explainer Video" },
];

const GRADIENTS = [
  { from: "rgba(236,72,153,0.16)", to: "rgba(13,10,26,1)" },
  { from: "rgba(168,85,247,0.16)", to: "rgba(13,10,26,1)" },
  { from: "rgba(244,63,94,0.14)", to: "rgba(13,10,26,1)" },
  { from: "rgba(99,102,241,0.16)", to: "rgba(13,10,26,1)" },
  { from: "rgba(139,92,246,0.14)", to: "rgba(13,10,26,1)" },
  { from: "rgba(168,85,247,0.18)", to: "rgba(13,10,26,1)" },
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
        {PLACEHOLDERS.map((item, i) => {
          const g = GRADIENTS[i % GRADIENTS.length];
          return (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="aspect-square rounded-2xl glow-card flex flex-col items-center justify-center gap-3 relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${g.from} 0%, ${g.to} 100%)` }}
            >
              {/* Grid texture */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(236,72,153,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,0.3) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Wand2 size={18} className="text-secondary/50" />
                </div>
                <p className="text-[10px] text-white/30 font-medium text-center px-3 leading-snug">{item.label}</p>
                <span className="flex items-center gap-1 text-[9px] text-white/20 tracking-widest uppercase">
                  <Sparkles size={8} className="text-secondary/30" />
                  Coming Soon
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <p className="text-center text-xs text-foreground-dim mt-8">
        Animation content coming soon — drop files into{" "}
        <code className="text-primary/60">public/videos/animation/</code>
      </p>
    </SectionContainer>
  );
}
