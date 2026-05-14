"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Film, Share2, Megaphone, Video, type LucideIcon } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { VIDEO_GALLERY } from "@/lib/constants";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "Product Demo": Film,
  "Social Media": Share2,
  "Ad Creative": Megaphone,
  Cinematic: Video,
};

const PLACEHOLDER_GRADIENTS = [
  { from: "rgba(168,85,247,0.20)", via: "rgba(13,10,26,1)", to: "rgba(236,72,153,0.12)" },
  { from: "rgba(236,72,153,0.20)", via: "rgba(13,10,26,1)", to: "rgba(168,85,247,0.12)" },
  { from: "rgba(99,102,241,0.22)", via: "rgba(13,10,26,1)", to: "rgba(168,85,247,0.14)" },
  { from: "rgba(139,92,246,0.22)", via: "rgba(13,10,26,1)", to: "rgba(236,72,153,0.12)" },
];

export function VideoShowcaseSection() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <SectionContainer id="videos" className="bg-surface/30">
      <div className="text-center mb-12">
        <p className="tag-purple inline-block mb-4">AI Video</p>
        <h2 className="section-title">Video Showcase</h2>
        <p className="section-subtitle">
          Short-form videos, animated ads, and cinematic clips — all AI-generated, production-ready.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {VIDEO_GALLERY.map((video, i) => {
          const gradient = PLACEHOLDER_GRADIENTS[i % PLACEHOLDER_GRADIENTS.length];
          const Icon = CATEGORY_ICONS[video.category] ?? Film;

          return (
            <motion.div key={i} variants={fadeInUp} className="glow-card rounded-2xl overflow-hidden group">
              <div className="relative aspect-video">
                {playing === i && video.src ? (
                  <video
                    src={video.src}
                    poster={video.poster || undefined}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center relative"
                    style={{
                      background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.via} 50%, ${gradient.to} 100%)`,
                    }}
                  >
                    {/* Grid texture */}
                    <div
                      className="absolute inset-0 opacity-15"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(168,85,247,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.2) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    {/* Category icon — top left */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <Icon size={12} className="text-primary/50" />
                      <span className="text-[10px] text-white/30 font-medium tracking-wider uppercase">
                        {video.category}
                      </span>
                    </div>

                    {/* Play button */}
                    <button
                      onClick={() => video.src && setPlaying(i)}
                      className="relative z-10 w-14 h-14 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary/25 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300"
                      aria-label={`Play ${video.title}`}
                    >
                      <Play size={18} className="text-primary ml-1" />
                    </button>

                    {/* Coming soon label */}
                    <span className="relative z-10 mt-3 text-[10px] font-medium tracking-widest uppercase text-white/25 group-hover:text-white/40 transition-colors duration-300">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Card footer */}
              <div className="p-4 border-t border-white/5">
                <p className="font-semibold text-foreground text-sm mb-1.5">{video.title}</p>
                <div className="flex items-center gap-2">
                  <Icon size={12} className="text-primary/60" />
                  <span className="tag-purple text-xs">{video.category}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <p className="text-center text-xs text-foreground-dim mt-8">
        Add your MP4 files to <code className="text-primary/70">public/videos/</code> and update{" "}
        <code className="text-primary/70">lib/constants.ts</code> to go live instantly.
      </p>
    </SectionContainer>
  );
}
