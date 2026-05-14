"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Palette,
  Share2,
  Briefcase,
  Megaphone,
  Sun,
  User,
  Sparkles,
  Building2,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { IMAGE_GALLERY } from "@/lib/constants";

const CATEGORIES = [
  "All",
  "Product",
  "Concept Art",
  "Social Media",
  "Brand",
  "Ad Creative",
  "Lifestyle",
  "Portrait",
  "Fantasy",
  "Architecture",
];

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Product: ShoppingBag,
  "Concept Art": Palette,
  "Social Media": Share2,
  Brand: Briefcase,
  "Ad Creative": Megaphone,
  Lifestyle: Sun,
  Portrait: User,
  Fantasy: Sparkles,
  Architecture: Building2,
};

// Each placeholder gets a unique gradient — cycles if more items than gradients
const PLACEHOLDER_GRADIENTS = [
  { from: "rgba(168,85,247,0.18)", to: "rgba(236,72,153,0.10)" },
  { from: "rgba(236,72,153,0.18)", to: "rgba(168,85,247,0.10)" },
  { from: "rgba(99,102,241,0.20)", to: "rgba(168,85,247,0.12)" },
  { from: "rgba(168,85,247,0.14)", to: "rgba(99,102,241,0.08)" },
  { from: "rgba(236,72,153,0.14)", to: "rgba(99,102,241,0.08)" },
  { from: "rgba(139,92,246,0.20)", to: "rgba(236,72,153,0.10)" },
  { from: "rgba(168,85,247,0.12)", to: "rgba(167,139,250,0.08)" },
  { from: "rgba(244,63,94,0.12)", to: "rgba(168,85,247,0.08)" },
  { from: "rgba(99,102,241,0.16)", to: "rgba(236,72,153,0.08)" },
  { from: "rgba(168,85,247,0.20)", to: "rgba(99,102,241,0.12)" },
  { from: "rgba(236,72,153,0.16)", to: "rgba(139,92,246,0.10)" },
  { from: "rgba(99,102,241,0.18)", to: "rgba(168,85,247,0.10)" },
];

export function ImageGallerySection() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? IMAGE_GALLERY
      : IMAGE_GALLERY.filter((img) => img.category === active);

  return (
    <SectionContainer id="gallery" wide>
      <div className="text-center mb-12">
        <p className="tag-purple inline-block mb-4">Portfolio</p>
        <h2 className="section-title">AI Image Gallery</h2>
        <p className="section-subtitle">
          Every image generated with AI — engineered with precise prompts for real commercial use.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-200 ${
              active === cat
                ? "bg-primary/20 border-primary/50 text-primary"
                : "border-white/10 text-foreground-muted hover:border-primary/30 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        key={active}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {filtered.map((img, i) => {
          const gradient = PLACEHOLDER_GRADIENTS[i % PLACEHOLDER_GRADIENTS.length];
          const Icon = CATEGORY_ICONS[img.category] ?? Sparkles;

          return (
            <motion.div
              key={`${active}-${i}`}
              variants={fadeInUp}
              className="relative aspect-square rounded-2xl overflow-hidden glow-card group cursor-pointer"
            >
              {img.src ? (
                /* Real image — swap placeholder out once files are added */
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              ) : (
                /* Gradient placeholder */
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.to} 100%)`,
                  }}
                >
                  {/* Subtle grid overlay */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(168,85,247,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.15) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />

                  {/* Icon circle */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300">
                      <Icon size={20} className="text-primary/70" />
                    </div>
                    <span className="text-[10px] font-medium tracking-widest uppercase text-white/30 group-hover:text-white/50 transition-colors duration-300">
                      Coming Soon
                    </span>
                  </div>
                </div>
              )}

              {/* Hover overlay — shows description and category */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-4">
                <p className="text-xs text-white/80 leading-snug mb-2">{img.alt}</p>
                <span className="tag-purple text-xs">{img.category}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <p className="text-center text-xs text-foreground-dim mt-8">
        Sample work incoming — drop your images into{" "}
        <code className="text-primary/70">public/images/</code> to go live instantly.
      </p>
    </SectionContainer>
  );
}
