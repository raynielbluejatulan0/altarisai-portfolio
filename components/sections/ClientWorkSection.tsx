"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CLIENT_WORK, type ClientWork } from "@/lib/constants";

export function ClientWorkSection() {
  return (
    <SectionContainer id="work" bordered>
      <SectionHeading
        eyebrow="UGC Ads"
        title={
          <>
            Ads built to <span className="text-gradient">convert.</span>
          </>
        }
        subtitle="A selection of the UGC ads we've produced. Verified client results, in their own words, are being added."
      />

      <motion.div
        className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {CLIENT_WORK.map((client, i) => (
          <motion.div key={client.video ?? i} variants={fadeInUp} className="h-full">
            <ClientCard item={client} />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}

function ClientCard({ item }: { item: ClientWork }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasVideo = Boolean(item.video);

  // Pause the video when it scrolls out of view (stops audio/playback)
  useEffect(() => {
    if (!playing) return;
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) el.pause();
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [playing]);

  return (
    <figure className="glow-card flex h-full flex-col overflow-hidden">
      {/* 9:16 ad */}
      <div className="relative w-full overflow-hidden bg-black" style={{ aspectRatio: "9 / 16" }}>
        {playing && item.video ? (
          <video
            ref={videoRef}
            src={item.video}
            poster={item.poster ?? undefined}
            controls
            autoPlay
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : item.poster ? (
          <button
            type="button"
            onClick={() => hasVideo && setPlaying(true)}
            className="group absolute inset-0 h-full w-full"
            aria-label={`Play ${item.brand} ad`}
          >
            <Image
              src={item.poster}
              alt={`${item.brand} AI UGC ad`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            {hasVideo && (
              <span className="pointer-events-none absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-black/55 sm:h-14 sm:w-14">
                <Play className="h-4 w-4 translate-x-[1px] fill-current sm:h-5 sm:w-5" />
              </span>
            )}
          </button>
        ) : (
          /* Placeholder: awaiting the real ad file */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-foreground-dim">
            <span className="grid h-14 w-14 place-items-center border border-white/15">
              <Play className="h-5 w-5" />
            </span>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em]">Reel coming soon</span>
          </div>
        )}
      </div>

      {/* Testimonial (honest interim until real, approved words are added) */}
      <figcaption className="flex flex-1 flex-col p-4 sm:p-5">
        {item.quote ? (
          <>
            {item.rating ? (
              <div className="flex gap-0.5 text-accent" aria-label={`${item.rating} out of 5`}>
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden />
                ))}
              </div>
            ) : null}
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground-muted">
              “{item.quote}”
            </blockquote>
            <div className="mt-5 border-t border-white/[0.06] pt-4">
              {item.brand ? (
                <p className="font-display text-base font-semibold text-foreground">{item.brand}</p>
              ) : null}
              {item.person ? (
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-foreground-dim">
                  {item.person}
                </p>
              ) : null}
            </div>
          </>
        ) : (
          <div className="flex flex-1 items-center gap-2 text-foreground-dim">
            <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" aria-hidden />
            <span className="font-mono text-[0.55rem] uppercase leading-tight tracking-[0.12em] sm:text-[0.62rem] sm:tracking-[0.2em]">
              Client results coming soon
            </span>
          </div>
        )}
      </figcaption>
    </figure>
  );
}
