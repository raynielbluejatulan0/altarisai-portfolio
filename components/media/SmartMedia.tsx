import Image from "next/image";
import type { Aspect, MediaAsset } from "@/lib/portfolio";
import { VideoPlaceholder } from "@/components/placeholders/VideoPlaceholder";
import { ImagePlaceholder } from "@/components/placeholders/ImagePlaceholder";

interface SmartMediaProps {
  asset: MediaAsset;
  className?: string;
  /** next/image sizes hint when rendering a real image */
  sizes?: string;
}

const aspectClasses: Record<Aspect, string> = {
  "9/16": "aspect-[9/16]",
  "16/9": "aspect-video",
  "1/1": "aspect-square",
  "4/5": "aspect-[4/5]",
};

/**
 * Renders any MediaAsset: placeholder today, real asset tomorrow.
 * Swapping content requires only editing the data in lib/portfolio.ts.
 */
export function SmartMedia({ asset, className = "", sizes = "(max-width: 768px) 100vw, 50vw" }: SmartMediaProps) {
  switch (asset.kind) {
    case "video-placeholder":
      return <VideoPlaceholder label={asset.label} className={className} />;
    case "image-placeholder":
      return <ImagePlaceholder label={asset.label} aspect={asset.aspect} className={className} />;
    case "image":
      return (
        <div className={`relative overflow-hidden rounded-2xl ${aspectClasses[asset.aspect ?? "4/5"]} ${className}`}>
          <Image src={asset.src} alt={asset.alt} fill sizes={sizes} className="object-cover" />
        </div>
      );
    case "video":
      return (
        <video
          src={asset.src}
          poster={asset.poster}
          controls
          playsInline
          preload="metadata"
          className={`w-full rounded-2xl ${className}`}
        />
      );
  }
}
