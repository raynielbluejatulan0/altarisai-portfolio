"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { CINEMATIC_VIDEOS, type SimpleVideo } from "@/lib/constants";

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
        className="relative w-full max-w-4xl"
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
          style={{ maxHeight: "82vh" }}
        />
        <p className="mt-3 px-1 text-white text-sm font-semibold">{video.title}</p>
      </motion.div>
    </div>
  );
}

function CinematicCard({ video, onPlay }: { video: SimpleVideo; onPlay: (v: SimpleVideo) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const showFirstFrame = () => { el.currentTime = 0.001; };
    el.addEventListener("loadedmetadata", showFirstFrame);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      el.removeEventListener("loadedmetadata", showFirstFrame);
    };
  }, []);

  return (
    <motion.div
      variants={fadeInUp}
      className="relative aspect-video rounded-xl overflow-hidden glow-card group cursor-pointer"
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

export function CinematicSection() {
  const [lightbox, setLightbox] = useState<SimpleVideo | null>(null);

  return (
    <>
      <SectionContainer id="cinematic">
        <div className="text-center mb-12">
          <p className="tag-purple inline-block mb-4">Cinematic AI</p>
          <h2 className="section-title">Cinematic Videos</h2>
          <p className="section-subtitle">
            High-production cinematic AI videos — dramatic lighting, epic scenes, and storytelling-first content.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {CINEMATIC_VIDEOS.map((video) => (
            <CinematicCard key={video.src} video={video} onPlay={setLightbox} />
          ))}
        </motion.div>
      </SectionContainer>

      {lightbox && <Lightbox video={lightbox} onClose={() => setLightbox(null)} />}
    </>
  );
}
