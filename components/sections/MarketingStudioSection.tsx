"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Button } from "@/components/ui/Button";
import {
  MARKETING_VIDEOS,
  MARKETING_VIDEOS_MIXED,
  MARKETING_VIDEO_CATEGORIES,
  type MarketingVideo,
} from "@/lib/constants";

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
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 flex items-center gap-1.5 text-white/50 hover:text-white text-sm transition-colors"
        >
          <X size={16} />
          Close
        </button>

        <video
          src={video.src}
          controls
          autoPlay
          playsInline
          className="w-full rounded-2xl bg-black"
          style={{ maxHeight: "85vh" }}
        />

        <div className="mt-3 px-1 flex items-center justify-between">
          <p className="text-white text-sm font-semibold">{video.title}</p>
          <span className="tag-purple text-xs">{video.category}</span>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Video Card ────────────────────────────────────────────────────────────────
function VideoCard({
  video,
  onPlay,
  scrollAutoplay,
}: {
  video: MarketingVideo;
  onPlay: (v: MarketingVideo) => void;
  scrollAutoplay: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const showFirstFrame = () => { el.currentTime = 0.001; };
    el.addEventListener("loadedmetadata", showFirstFrame);
    el.addEventListener("canplay", showFirstFrame);
    if (el.readyState >= 1) showFirstFrame();
    else el.load();

    if (!scrollAutoplay) {
      el.pause();
      return () => {
        el.removeEventListener("loadedmetadata", showFirstFrame);
        el.removeEventListener("canplay", showFirstFrame);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.play().catch(() => {}); }
        else { el.pause(); }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      el.removeEventListener("loadedmetadata", showFirstFrame);
      el.removeEventListener("canplay", showFirstFrame);
    };
  }, [scrollAutoplay]);

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

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-8 pb-2.5 px-2.5 pointer-events-none">
        <p className="text-white text-[11px] font-semibold leading-tight">{video.title}</p>
        <span className="tag-purple text-[9px] mt-1 inline-block">{video.category}</span>
      </div>

      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
        <span className="text-white text-xs font-medium bg-black/60 px-3 py-1.5 rounded-full">
          Tap to watch
        </span>
      </div>
    </motion.div>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────────
export function MarketingStudioSection() {
  const [active, setActive] = useState<"All" | typeof MARKETING_VIDEO_CATEGORIES[number]>("All");
  const [lightboxVideo, setLightboxVideo] = useState<MarketingVideo | null>(null);

  const filtered =
    active === "All"
      ? MARKETING_VIDEOS_MIXED
      : MARKETING_VIDEOS.filter((v) => v.category === active);

  const scrollAutoplay = active !== "All";

  return (
    <>
      <SectionContainer id="marketing" wide>
        <div className="text-center mb-12">
          <p className="tag-purple inline-block mb-4">Ad Creative</p>
          <h2 className="section-title">Ad Creative</h2>
          <p className="section-subtitle">
            AI-powered marketing videos for brands, e-commerce stores, and agencies.
            Tap any video to watch it full screen.
          </p>
        </div>

        {/* Filter pills — same style as Image Gallery */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(["All", ...MARKETING_VIDEO_CATEGORIES] as const).map((cat) => (
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

        {/* Portrait grid */}
        <motion.div
          key={active}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {filtered.map((video) => (
            <VideoCard
              key={video.src}
              video={video}
              onPlay={setLightboxVideo}
              scrollAutoplay={scrollAutoplay}
            />
          ))}
        </motion.div>

        <div className="mt-16 pt-12 border-t border-white/5 text-center">
          <p className="text-foreground-muted mb-6 text-sm">
            Need marketing videos like these for your brand?
          </p>
          <Button href="#contact" size="lg">Work With Me</Button>
        </div>
      </SectionContainer>

      {lightboxVideo && (
        <Lightbox video={lightboxVideo} onClose={() => setLightboxVideo(null)} />
      )}
    </>
  );
}
