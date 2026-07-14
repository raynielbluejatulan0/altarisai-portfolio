import { Play } from "lucide-react";

interface VideoPlaceholderProps {
  label?: string;
  className?: string;
}

/**
 * Elegant stand-in for a final ad video. Visually resembles an embedded
 * 9:16 player while clearly reading as a placeholder — swap by replacing
 * the MediaAsset with { kind: "video", src: "/portfolio/videos/..." }.
 */
export function VideoPlaceholder({ label = "Replace With Final Ad", className = "" }: VideoPlaceholderProps) {
  return (
    <div
      className={`relative aspect-[9/16] overflow-hidden rounded-2xl border border-dashed border-white/15 bg-surface ${className}`}
    >
      {/* atmosphere */}
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(200,169,110,0.06) 0%, transparent 65%)" }}
      />

      {/* player chrome */}
      <div className="relative flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm transition-colors group-hover:border-accent/40">
          <Play className="ml-0.5 h-6 w-6 text-white/70" fill="currentColor" strokeWidth={0} />
        </span>
        <div>
          <p className="font-body text-[0.65rem] uppercase tracking-[0.25em] text-accent-muted">
            Video Preview
          </p>
          <p className="mt-2 text-sm font-medium text-foreground-muted">1080×1920 Placeholder</p>
          <p className="mt-1 text-xs text-foreground-dim">{label}</p>
        </div>
      </div>

      {/* faux progress bar */}
      <div className="absolute inset-x-4 bottom-4" aria-hidden>
        <div className="h-0.5 rounded-full bg-white/10">
          <div className="h-full w-1/3 rounded-full bg-accent/50" />
        </div>
        <div className="mt-2 flex justify-between text-[0.6rem] text-foreground-dim">
          <span>0:00</span>
          <span>0:30</span>
        </div>
      </div>
    </div>
  );
}
