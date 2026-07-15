/**
 * Portfolio media — typed access to the generated manifest.
 *
 * The manifest is produced by `scripts/build-media.mjs`, which scans the
 * `/AI Videos` folder. The portfolio is fully data-driven: adding a new
 * folder of clips and re-running the script surfaces a new category here
 * automatically — no code changes required.
 */

import manifest from "./media-manifest.json";

export type MediaType = "video" | "image";
export type Orientation = "portrait" | "landscape" | "square";

export interface MediaItem {
  id: string;
  title: string;
  type: MediaType;
  /** playable/displayable asset under /public */
  src: string;
  /** poster/thumbnail (same file for images) */
  poster: string;
  width: number;
  height: number;
  orientation: Orientation;
  /** seconds; 0 for images */
  duration: number;
  category: string;
  categorySlug: string;
}

export interface MediaCategory {
  slug: string;
  name: string;
  description: string;
  count: number;
  items: MediaItem[];
}

const data = manifest as unknown as {
  generatedAt: string;
  categoryCount: number;
  itemCount: number;
  categories: MediaCategory[];
};

export const CATEGORIES: MediaCategory[] = data.categories;

export const TOTAL_ITEMS: number = data.itemCount;
export const TOTAL_CATEGORIES: number = data.categoryCount;

export function getCategory(slug: string): MediaCategory | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getAllItems(): MediaItem[] {
  return CATEGORIES.flatMap((c) => c.items);
}

/** Prefers video items; falls back to whatever the category has. */
function pickShowcaseItem(cat: MediaCategory): MediaItem | undefined {
  return cat.items.find((i) => i.type === "video") ?? cat.items[0];
}

/**
 * Featured reel for the homepage — one strong clip per category (diverse),
 * videos preferred, capped so the section stays tight.
 */
export function getFeaturedItems(limit = 8): MediaItem[] {
  const picks = CATEGORIES.map(pickShowcaseItem).filter(Boolean) as MediaItem[];
  return picks.slice(0, limit);
}

/** Duration formatted as m:ss (empty for images / unknown). */
export function formatDuration(seconds: number): string {
  if (!seconds || seconds <= 0) return "";
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/** Inline CSS aspect-ratio string for zero-layout-shift media boxes. */
export function aspectRatio(item: Pick<MediaItem, "width" | "height">): string {
  if (!item.width || !item.height) return "9 / 16";
  return `${item.width} / ${item.height}`;
}
