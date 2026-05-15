"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { IMAGE_GALLERY } from "@/lib/constants";

const CATEGORIES = [
  "All", "Product", "Concept Art", "Social Media",
  "Brand", "Ad Creative", "Lifestyle", "Portrait", "Fantasy", "Architecture",
];

export function ImageGallerySection() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    active === "All"
      ? IMAGE_GALLERY
      : IMAGE_GALLERY.filter((img) => img.category === active);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, prev, next]);

  const currentImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

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
        {filtered.map((img, i) => (
          <motion.div
            key={`${active}-${i}`}
            variants={fadeInUp}
            className="relative aspect-square rounded-2xl overflow-hidden glow-card group cursor-pointer"
            onClick={() => img.src && openLightbox(i)}
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
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111111]">
                <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:border-white/[0.14] transition-all duration-300">
                  <Sparkles size={20} className="text-white/25" />
                </div>
                <span className="mt-3 text-[10px] font-medium tracking-widest uppercase text-white/20 group-hover:text-white/35 transition-colors duration-300">
                  Coming Soon
                </span>
              </div>
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-4">
              <span className="tag-purple text-xs">{img.category}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {currentImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              onClick={closeLightbox}
            >
              <X size={18} className="text-white" />
            </button>

            {/* Prev */}
            {filtered.length > 1 && (
              <button
                className="absolute left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); prev(); }}
              >
                <ChevronLeft size={20} className="text-white" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              className="relative max-w-4xl max-h-[90vh] w-full mx-16"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={1200}
                height={1200}
                className="object-contain w-full max-h-[90vh] rounded-2xl"
              />
              <p className="text-center text-sm text-white/50 mt-3">{currentImage.category}</p>
            </motion.div>

            {/* Next */}
            {filtered.length > 1 && (
              <button
                className="absolute right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                onClick={(e) => { e.stopPropagation(); next(); }}
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </SectionContainer>
  );
}
