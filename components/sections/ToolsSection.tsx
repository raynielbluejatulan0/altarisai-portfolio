"use client";

import { motion } from "framer-motion";
import { Video, Image as ImageIcon, Music, User, Scissors, Palette, type LucideIcon } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { TOOLS_USED } from "@/lib/constants";

const CATEGORY_CONFIG: Record<string, { icon: LucideIcon; label: string }> = {
  Video:   { icon: Video,      label: "Video Generation" },
  Image:   { icon: ImageIcon,  label: "Image Generation" },
  Audio:   { icon: Music,      label: "Audio & Voice" },
  Avatar:  { icon: User,       label: "AI Avatars" },
  Editing: { icon: Scissors,   label: "Editing" },
  Design:  { icon: Palette,    label: "Design" },
};

const CATEGORY_ORDER = ["Video", "Image", "Audio", "Avatar", "Editing", "Design"];

export function ToolsSection() {
  const grouped = TOOLS_USED.reduce<Record<string, string[]>>((acc, tool) => {
    if (!acc[tool.category]) acc[tool.category] = [];
    acc[tool.category].push(tool.name);
    return acc;
  }, {});

  const categories = CATEGORY_ORDER.filter((c) => grouped[c]);

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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {categories.map((cat) => {
          const { icon: Icon, label } = CATEGORY_CONFIG[cat];
          return (
            <motion.div key={cat} variants={fadeInUp} className="glow-card rounded-2xl p-5">
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={15} className="text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{label}</span>
              </div>

              {/* Tool pills */}
              <div className="flex flex-wrap gap-2">
                {grouped[cat].map((name) => (
                  <span
                    key={name}
                    className="text-xs text-foreground-muted bg-white/[0.04] border border-white/[0.07] px-3 py-1 rounded-full"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
