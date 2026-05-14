"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { IMAGE_GALLERY } from "@/lib/constants";
import Image from "next/image";

const CATEGORIES = ["All", "Product", "Concept Art", "Social Media", "Brand", "Ad Creative", "Lifestyle"];

export function ImageGallerySection() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
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
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {filtered.length > 0 ? (
          filtered.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="relative aspect-square rounded-2xl overflow-hidden glow-card group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="tag-purple text-xs">{img.category}</span>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-3 text-center py-20 text-foreground-dim">
            Upload your AI images to <code className="text-primary">public/images/</code> to display them here.
          </div>
        )}
      </motion.div>
    </SectionContainer>
  );
}
