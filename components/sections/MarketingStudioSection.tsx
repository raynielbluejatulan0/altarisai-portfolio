"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Film, Zap, MapPin, Play } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Button } from "@/components/ui/Button";
import { MARKETING_VIDEOS, type MarketingVideo } from "@/lib/constants";

// ─── Gradient pool ─────────────────────────────────────────────────────────────
const GRADIENTS = [
  { from: "rgba(168,85,247,0.22)", to: "rgba(236,72,153,0.12)" },
  { from: "rgba(236,72,153,0.22)", to: "rgba(168,85,247,0.12)" },
  { from: "rgba(99,102,241,0.24)", to: "rgba(168,85,247,0.14)" },
  { from: "rgba(168,85,247,0.18)", to: "rgba(99,102,241,0.10)" },
  { from: "rgba(139,92,246,0.24)", to: "rgba(236,72,153,0.12)" },
  { from: "rgba(236,72,153,0.18)", to: "rgba(99,102,241,0.08)" },
  { from: "rgba(244,63,94,0.16)", to: "rgba(168,85,247,0.10)" },
];

// ─── Video Card ────────────────────────────────────────────────────────────────
function VideoCard({ video, index }: { video: MarketingVideo; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);
  const g = GRADIENTS[index % GRADIENTS.length];

  const onEnter = () => {
    setActive(true);
    videoRef.current?.play().catch(() => {});
  };

  const onLeave = () => {
    setActive(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      className="relative aspect-[9/16] rounded-xl overflow-hidden glow-card group cursor-pointer select-none"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(160deg, ${g.from} 0%, rgba(13,10,26,1) 55%, ${g.to} 100%)` }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Play icon — visible when idle */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          active ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-9 h-9 rounded-full bg-white/8 border border-white/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Play size={14} className="text-white/50 ml-0.5" />
        </div>
      </div>

      {/* Actual video — lazy loaded, plays on hover */}
      <video
        ref={videoRef}
        src={video.src}
        muted
        loop
        playsInline
        preload="none"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Bottom label — fades in on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5">
        <p className="text-white text-[11px] font-semibold leading-tight">{video.title}</p>
        <span className="tag-purple text-[9px] mt-1 self-start">{video.subcategory}</span>
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
  defaultSub?: string;
}

function Chapter({ number, title, description, icon: Icon, videos, subcategories, defaultSub }: ChapterProps) {
  const [active, setActive] = useState(defaultSub ?? "All");
  const filtered = active === "All" ? videos : videos.filter((v) => v.subcategory === active);

  return (
    <div className="mb-20 last:mb-0">
      {/* Chapter header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div className="flex items-start gap-4">
          <span className="text-6xl font-black text-white/[0.04] leading-none select-none mt-1">{number}</span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Icon size={15} className="text-primary" />
              <h3 className="text-lg font-bold text-foreground tracking-tight">{title}</h3>
            </div>
            <p className="text-sm text-foreground-muted">{description}</p>
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
                  : "border-white/10 text-foreground-dim hover:border-primary/30 hover:text-foreground-muted"
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>

      {/* Video grid — portrait 9:16 cards */}
      <motion.div
        key={active}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2.5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {filtered.map((video, i) => (
          <VideoCard key={video.src} video={video} index={i} />
        ))}
      </motion.div>
    </div>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────────
export function MarketingStudioSection() {
  const formatVideos = MARKETING_VIDEOS.filter((v) => v.chapter === "Format");
  const hookVideos = MARKETING_VIDEOS.filter((v) => v.chapter === "Hook");
  const settingVideos = MARKETING_VIDEOS.filter((v) => v.chapter === "Setting");

  return (
    <SectionContainer id="marketing" wide>
      {/* Section header */}
      <div className="text-center mb-16">
        <p className="tag-purple inline-block mb-4">AI Marketing Studio</p>
        <h2 className="section-title">Marketing Studio</h2>
        <p className="section-subtitle">
          Full-service AI video production for brands, e-commerce, and marketing agencies.
          Every video engineered for maximum engagement — hover to preview.
        </p>
      </div>

      {/* Chapter 01 — Formats */}
      <Chapter
        number="01"
        title="Formats"
        description="Pick the video type that fits your product and audience"
        icon={Film}
        videos={formatVideos}
        subcategories={["UGC", "Commercial"]}
      />

      <div className="border-t border-white/5 my-16" />

      {/* Chapter 02 — Hooks */}
      <Chapter
        number="02"
        title="Hooks"
        description="The first 3 seconds that stop the scroll and keep eyes on screen"
        icon={Zap}
        videos={hookVideos}
        subcategories={["Stunt", "Subtle"]}
      />

      <div className="border-t border-white/5 my-16" />

      {/* Chapter 03 — Settings */}
      <Chapter
        number="03"
        title="Settings"
        description="Choose where the story unfolds — scenes that frame your product"
        icon={MapPin}
        videos={settingVideos}
        subcategories={["Realistic", "Unrealistic"]}
      />

      {/* CTA */}
      <div className="mt-16 pt-12 border-t border-white/5 text-center">
        <p className="text-foreground-muted mb-6 text-sm">
          Ready to create AI marketing videos for your brand?
        </p>
        <Button href="#contact" size="lg">
          Book a Marketing Package
        </Button>
      </div>
    </SectionContainer>
  );
}
