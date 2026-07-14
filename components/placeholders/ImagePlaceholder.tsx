import { ImageIcon } from "lucide-react";
import type { Aspect } from "@/lib/portfolio";

interface ImagePlaceholderProps {
  label: string;
  aspect?: Aspect;
  className?: string;
}

// static map so Tailwind JIT sees every class
const aspectClasses: Record<Aspect, string> = {
  "9/16": "aspect-[9/16]",
  "16/9": "aspect-video",
  "1/1": "aspect-square",
  "4/5": "aspect-[4/5]",
};

/**
 * Labeled stand-in for an image asset ("Storyboard Frame", "AI Generated
 * Image", "Replace With Product Image", ...). Swap by replacing the
 * MediaAsset with { kind: "image", src: "/portfolio/images/..." }.
 */
export function ImagePlaceholder({ label, aspect = "4/5", className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-dashed border-white/15 bg-surface ${aspectClasses[aspect]} ${className}`}
    >
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.03) 0%, transparent 70%)" }}
      />
      <div className="relative flex h-full flex-col items-center justify-center gap-3 px-4 text-center">
        <ImageIcon className="h-6 w-6 text-white/25" strokeWidth={1.5} />
        <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-foreground-dim">
          {label}
        </p>
      </div>
    </div>
  );
}
