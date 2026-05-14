"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { VIDEO_GALLERY } from "@/lib/constants";
import { Play } from "lucide-react";

export function VideoShowcaseSection() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <SectionContainer id="videos" className="bg-surface/30">
      <div className="text-center mb-12">
        <p className="tag-purple inline-block mb-4">AI Video</p>
        <h2 className="section-title">Video Showcase</h2>
        <p className="section-subtitle">
          Short-form videos, animated ads, and cinematic clips — all AI-generated, production-ready.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {VIDEO_GALLERY.length > 0 ? (
          VIDEO_GALLERY.map((video, i) => (
            <motion.div key={i} variants={fadeInUp} className="glow-card rounded-2xl overflow-hidden group">
              <div className="relative aspect-video bg-surface">
                {playing === i ? (
                  <video
                    src={video.src}
                    poster={video.poster}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    {/* Poster / placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <button
                        onClick={() => setPlaying(i)}
                        className="w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center hover:bg-primary/30 transition-all group-hover:scale-110 duration-300"
                        aria-label={`Play ${video.title}`}
                      >
                        <Play size={20} className="text-primary ml-1" />
                      </button>
                    </div>
                  </>
                )}
              </div>
              <div className="p-4">
                <p className="font-semibold text-foreground mb-1">{video.title}</p>
                <span className="tag-purple text-xs">{video.category}</span>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-3 text-center py-20 text-foreground-dim">
            Add your compressed MP4 files to <code className="text-primary">public/videos/</code> and update the <code className="text-primary">VIDEO_GALLERY</code> in <code className="text-primary">lib/constants.ts</code>.
          </div>
        )}
      </motion.div>
    </SectionContainer>
  );
}
