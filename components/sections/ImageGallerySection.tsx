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
  "All", "Product", "Concept Art", "Social Media",
  "Brand", "Ad Creative", "Lifestyle", "Portrait", "Fantasy", "Architecture",
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
                : "border-white/10 text-foreground-muted hover:border-white/20 hover:text-foreground"
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
          const Icon = CATEGORY_ICONS[img.category] ?? Sparkles;

          return (
            <motion.div
              key={`${active}-${i}`}
              variants={fadeInUp}
              className="relative aspect-square rounded-2xl overflow-hidden glow-card group cursor-pointer"
            >
              {img.src ? (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              ) : (
                /* Neutral dark placeholder — no purple */
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111111]">
                  <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:border-white/[0.14] transition-all duration-300">
                    <Icon size={20} className="text-white/25" />
                  </div>
                  <span className="mt-3 text-[10px] font-medium tracking-widest uppercase text-white/20 group-hover:text-white/35 transition-colors duration-300">
                    Coming Soon
                  </span>
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-4">
                <p className="text-xs text-white/80 leading-snug mb-2">{img.alt}</p>
                <span className="tag-purple text-xs">{img.category}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <p className="text-center text-xs text-foreground-dim mt-8">
        Drop your images into{" "}
        <code className="text-white/40">public/images/</code> to go live instantly.
      </p>
    </SectionContainer>
  );
}
