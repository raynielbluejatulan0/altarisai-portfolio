"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Film, Zap, MapPin, X } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Button } from "@/components/ui/Button";
import { MARKETING_VIDEOS, type MarketingVideo } from "@/lib/constants";

// ─── Helpers ───────────────────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ video, onClose }: { video: MarketingVideo; onClose: () => void }) {
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
      style={{ background: "rgba(0,0,0,0.95)" }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-xs"
        initial={{ scale: 0.93, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 flex items-center gap-1.5 text-white/50 hover:text-white text-sm transition-colors"
        >
          <X size={16} />
          Close
        </button>

        {/* Video player */}
        <video
          src={video.src}
          controls
          autoPlay
          playsInline
          className="w-full rounded-2xl bg-black"
          style={{ maxHeight: "85vh" }}
        />

        {/* Info row */}
        <div className="mt-3 px-1 flex items-center justify-between">
          <p className="text-white text-sm font-semibold">{video.title}</p>
          <span className="tag-purple text-xs">{video.subcategory}</span>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Video Card ────────────────────────────────────────────────────────────────
function VideoCard({ video, onPlay }: { video: MarketingVideo; onPlay: (v: MarketingVideo) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.play().catch(() => {}); }
        else { el.pause(); }
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
      {/* Video — autoplays on scroll, muted */}
      <video
        ref={videoRef}
        src={video.src}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-8 pb-2.5 px-2.5 pointer-events-none">
        <p className="text-white text-[11px] font-semibold leading-tight">{video.title}</p>
        <span className="tag-purple text-[9px] mt-1 inline-block">{video.subcategory}</span>
      </div>

      {/* Click-to-watch hint on hover */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
        <span className="text-white text-xs font-medium bg-black/60 px-3 py-1.5 rounded-full">
          Tap to watch
        </span>
      </div>
    </motion.div>
  );
}

// ─── Chapter ───────────────────────────────────────────────────────────────────
interface ChapterProps {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  videos: MarketingVideo[];
  subcategories: string[];
  onPlay: (v: MarketingVideo) => void;
}

function Chapter({ number, title, description, icon: Icon, videos, subcategories, onPlay }: ChapterProps) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? videos : videos.filter((v) => v.subcategory === active);

  return (
    <div className="mb-20 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div className="flex items-start gap-4">
          <span className="text-6xl font-black text-white/[0.04] leading-none select-none mt-1">{number}</span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Icon size={15} className="text-primary" />
              <h3 className="text-lg font-bold text-foreground tracking-tight">{title}</h3>
            </div>
            <p className="text-sm text-foreground-muted max-w-lg">{description}</p>
          </div>
        </div>

        {/* Sub-category pills */}
        <div className="flex gap-2 flex-shrink-0">
          {["All", ...subcategories].map((sub) => (
            <button
              key={sub}
              onClick={() => setActive(sub)}
              className={`px-3 py-1 rounded-full text-xs border transition-all duration-200 ${
                active === sub
                  ? "bg-primary/20 border-primary/50 text-primary"
                  : "border-white/10 text-foreground-dim hover:border-white/20 hover:text-foreground-muted"
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* 6-column portrait grid */}
      <motion.div
        key={active}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {filtered.map((video) => (
          <VideoCard key={video.src} video={video} onPlay={onPlay} />
        ))}
      </motion.div>
    </div>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────────
export function MarketingStudioSection() {
  const [lightboxVideo, setLightboxVideo] = useState<MarketingVideo | null>(null);

  // Content Styles: shuffled once on mount so types are mixed
  const [shuffledFormats] = useState(() =>
    shuffle(MARKETING_VIDEOS.filter((v) => v.chapter === "Format"))
  );
  const hookVideos = MARKETING_VIDEOS.filter((v) => v.chapter === "Hook");
  const settingVideos = MARKETING_VIDEOS.filter((v) => v.chapter === "Setting");

  return (
    <>
      <SectionContainer id="marketing" wide>
        <div className="text-center mb-16">
          <p className="tag-purple inline-block mb-4">AI Marketing Studio</p>
          <h2 className="section-title">Marketing Studio</h2>
          <p className="section-subtitle">
            I create AI-powered marketing videos for brands, e-commerce stores, and agencies.
            Scroll to explore — tap any video to watch it.
          </p>
        </div>

        <Chapter
          number="01"
          title="Content Styles"
          description="From authentic UGC to high-production commercials — every format your brand needs to grow."
          icon={Film}
          videos={shuffledFormats}
          subcategories={["UGC", "Commercial"]}
          onPlay={setLightboxVideo}
        />

        <div className="border-t border-white/5 my-16" />

        <Chapter
          number="02"
          title="Scroll-Stopping Hooks"
          description="The first 3 seconds that grab attention and keep viewers locked in — proven openers for every campaign."
          icon={Zap}
          videos={hookVideos}
          subcategories={["Stunt", "Subtle"]}
          onPlay={setLightboxVideo}
        />

        <div className="border-t border-white/5 my-16" />

        <Chapter
          number="03"
          title="Scenes & Locations"
          description="Place your product anywhere — from everyday real-life settings to impossible, head-turning scenes."
          icon={MapPin}
          videos={settingVideos}
          subcategories={["Realistic", "Unrealistic"]}
          onPlay={setLightboxVideo}
        />

        <div className="mt-16 pt-12 border-t border-white/5 text-center">
          <p className="text-foreground-muted mb-6 text-sm">
            Need marketing videos like these for your brand?
          </p>
          <Button href="#contact" size="lg">Work With Me</Button>
        </div>
      </SectionContainer>

      {/* Lightbox — renders outside section so it covers full screen */}
      {lightboxVideo && (
        <Lightbox video={lightboxVideo} onClose={() => setLightboxVideo(null)} />
      )}
    </>
  );
}
