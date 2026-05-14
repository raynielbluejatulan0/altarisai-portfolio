"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { CONTENT_TYPES } from "@/lib/constants";
import { Image, Video, Layout, PlaySquare, Users, Palette } from "lucide-react";

const iconMap = {
  Image, Video, Layout, Youtube: PlaySquare, Users, Palette,
} as Record<string, React.ComponentType<{ size?: number; className?: string }>>;

export function ServicesSection() {
  return (
    <SectionContainer id="services">
      <div className="text-center mb-12">
        <p className="tag-purple inline-block mb-4">What I Create</p>
        <h2 className="section-title">Content Types</h2>
        <p className="section-subtitle">
          From single images to full content systems — I handle the full AI content pipeline.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {CONTENT_TYPES.map((type) => {
          const Icon = iconMap[type.icon];
          return (
            <motion.div key={type.title} variants={fadeInUp} className="glow-card rounded-2xl p-6 transition-all duration-300">
              {Icon && (
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-4">
                  <Icon size={22} className="text-white/50" />
                </div>
              )}
              <h3 className="font-bold text-foreground text-lg mb-2">{type.title}</h3>
              <p className="text-foreground-muted text-sm leading-relaxed mb-4">{type.description}</p>
              <div className="flex flex-wrap gap-2">
                {type.examples.map((ex) => (
                  <span key={ex} className="tag-purple">{ex}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
