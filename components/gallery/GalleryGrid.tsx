"use client";

import { useState } from "react";
import type { MediaItem } from "@/lib/media";
import { MediaCard } from "./MediaCard";
import { Lightbox } from "./Lightbox";

interface GalleryGridProps {
  items: MediaItem[];
  /** column density preset */
  density?: "comfortable" | "dense";
  priorityCount?: number;
  /** analytics hook — fired when an item is opened in the lightbox */
  onItemOpen?: (item: MediaItem) => void;
}

/**
 * Masonry gallery that respects each clip's native aspect ratio (9:16, 16:9,
 * etc.) and owns a Lightbox scoped to its own items, so prev/next cycles the
 * visible set. CSS multi-column keeps mixed orientations looking intentional.
 */
export function GalleryGrid({ items, density = "comfortable", priorityCount = 0, onItemOpen }: GalleryGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const columns =
    density === "dense"
      ? "columns-2 sm:columns-3 lg:columns-4 xl:columns-5"
      : "columns-2 md:columns-3 lg:columns-4";

  return (
    <>
      <div className={`${columns} gap-4 [column-fill:_balance] sm:gap-5`}>
        {items.map((item, i) => (
          <div key={item.id} className="mb-4 break-inside-avoid sm:mb-5">
            <MediaCard
              item={item}
              onOpen={() => {
                setOpenIndex(i);
                onItemOpen?.(item);
              }}
              priority={i < priorityCount}
            />
          </div>
        ))}
      </div>

      <Lightbox items={items} index={openIndex} onClose={() => setOpenIndex(null)} onIndexChange={setOpenIndex} />
    </>
  );
}
