"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ANIMATION_VIDEOS, type SimpleVideo } from "@/lib/constants";

function Lightbox({ video, onClose }: { video: SimpleVideo; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.96)" }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-xs"
        initial={{ scale: 0.93, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 flex items-center gap-1.5 text-white/50 hover:text-white text-sm transition-colors"
        >
          <X size={16} /> Close
        </button>
        <video
          src={video.src}
          controls
          autoPlay
          playsInline
          className="w-full rounded-2xl bg-black"
          style={{ maxHeight: "85vh" }}
        />
        <p className="mt-3 px-1 text-white text-sm font-semibold">{video.title}</p>
      </motion.div>
    </div>
  );
}

function AnimationCard({ video, onPlay }: { video: SimpleVideo; onPlay: (v: SimpleVideo) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      variants={fadeInUp}
      className="relative aspect-[9/16] rounded-xl overflow-hidden glow-card group cursor-pointer"
      onClick={() => onPlay(video)}
    >
      <video
        ref={videoRef}
        src={video.src}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
        <span className="text-white text-xs font-medium bg-black/60 px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Tap to watch
        </span>
      </div>
    </motion.div>
  );
}

export function AnimationSection() {
  const [lightbox, setLightbox] = useState<SimpleVideo | null>(null);

  return (
    <>
      <SectionContainer id="animation" className="bg-surface/20">
        <div className="text-center mb-12">
          <p className="tag-purple inline-block mb-4">AI Animation</p>
          <h2 className="section-title">Animation Studio</h2>
          <p className="section-subtitle">
            Motion graphics, animated ads, and character animations — AI-generated
            for motion designers, animators, and creative teams.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {ANIMATION_VIDEOS.map((video) => (
            <AnimationCard key={video.src} video={video} onPlay={setLightbox} />
          ))}
        </motion.div>
      </SectionContainer>

      {lightbox && <Lightbox video={lightbox} onClose={() => setLightbox(null)} />}
    </>
  );
}
