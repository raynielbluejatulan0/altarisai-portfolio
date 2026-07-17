/**
 * Media pipeline — turns the raw `/AI Videos` portfolio folder into
 * web-optimized assets + a manifest the site reads dynamically.
 *
 *   node scripts/build-media.mjs
 *
 * For every category folder it:
 *   • compresses each video to a web-friendly H.264 MP4 (faststart, ≤1280px)
 *   • extracts a poster frame (JPG)
 *   • optimizes still images
 *   • records dimensions / orientation / duration
 *
 * Output:
 *   public/portfolio/media/<category-slug>/<name>.{mp4,jpg}
 *   lib/media-manifest.json   ← single source of truth for the portfolio
 *
 * Idempotent: skips outputs that are already newer than their source, so
 * re-running after adding a new folder only processes the new files.
 *
 * Requires ffmpeg + ffprobe on PATH (only needed locally, never on Vercel).
 */

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "AI Videos");
const OUT_DIR = path.join(ROOT, "public", "portfolio", "media");
const MANIFEST = path.join(ROOT, "lib", "media-manifest.json");

const VIDEO_EXT = new Set([".mp4", ".mov", ".webm", ".m4v", ".avi", ".mkv"]);
const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const MAX_EDGE = 1280; // longest side of any output
const VIDEO_CRF = 26; // quality/size balance for portfolio playback
const IMAGE_MAX = 1600;

/* ── Human-friendly category names & descriptions ─────────────────────────── */

const NAME_OVERRIDES = {
  "3d-pixar": "3D Pixar Style",
  ugc: "UGC Ads",
  vsl: "VSL",
  "graphics-designs": "Graphics Design",
  "music-video-3d": "3D Music Video",
  "news-style": "News Style",
  podcast: "Podcast",
  "real-estate-walkthrough": "Real Estate Walkthrough",
  "shorts-affiliate": "Affiliate Shorts",
  skeleton: "Skeleton",
  claymation: "Claymation",
};

/**
 * Display order for categories (by slug). Anything not listed here is appended
 * alphabetically, so new folders still show up automatically.
 */
const CATEGORY_ORDER = [
  "ugc",
  "vsl",
  "podcast",
  "3d-pixar",
  "claymation",
  "music-video-3d",
  "news-style",
  "shorts-affiliate",
  "skeleton",
  "real-estate-walkthrough",
  "graphics-designs",
];

const DESCRIPTIONS = {
  ugc: "Authentic, creator-style ads engineered to feel native to the feed, and built to convert.",
  vsl: "Long-form video sales letters that hold attention and walk viewers all the way to the buy.",
  "3d-pixar": "Stylized 3D character animation with a cinematic, studio-quality finish.",
  "graphics-designs": "Brand graphics, thumbnails, and static ad creative designed to stop the scroll.",
  "music-video-3d": "3D-animated music videos with directed motion, mood, and rhythm.",
  "news-style": "Broadcast-style news segments that lend authority and urgency to a message.",
  podcast: "Podcast-style video content and clips built for reach and easy repurposing.",
  "real-estate-walkthrough": "Immersive property walkthroughs that sell the space before the first visit.",
  "shorts-affiliate": "Short-form affiliate ads engineered to hook, demo, and drive the click.",
  skeleton: "Experimental concept pieces and creative-range tests from the studio.",
  claymation: "Charming stop-motion-style claymation with a handcrafted, tactile look.",
};

/* ── Helpers ──────────────────────────────────────────────────────────────── */

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const titleCase = (s) =>
  s
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

/** natural sort so 2 comes before 10 */
const naturalCompare = (a, b) =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });

function run(bin, args) {
  const r = spawnSync(bin, args, { encoding: "utf8" });
  if (r.error) throw r.error;
  return r;
}

function probe(file) {
  const r = run("ffprobe", [
    "-v", "error",
    "-select_streams", "v:0",
    "-show_entries", "stream=width,height:format=duration",
    "-of", "json",
    file,
  ]);
  try {
    const j = JSON.parse(r.stdout || "{}");
    const st = (j.streams && j.streams[0]) || {};
    const dur = j.format && j.format.duration ? parseFloat(j.format.duration) : 0;
    return { width: st.width || 0, height: st.height || 0, duration: dur || 0 };
  } catch {
    return { width: 0, height: 0, duration: 0 };
  }
}

const isNewer = (out, src) =>
  fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(src).mtimeMs;

/** scale filter: fit inside MAX_EDGE box, keep aspect, force even dims */
const scaleFilter = (max) =>
  `scale='min(${max},iw)':'min(${max},ih)':force_original_aspect_ratio=decrease,scale=trunc(iw/2)*2:trunc(ih/2)*2`;

function orientationOf(w, h) {
  if (!w || !h) return "portrait";
  const r = w / h;
  if (r > 1.15) return "landscape";
  if (r < 0.87) return "portrait";
  return "square";
}

/* ── Encoders ─────────────────────────────────────────────────────────────── */

function encodeVideo(src, outMp4) {
  run("ffmpeg", [
    "-y", "-i", src,
    "-vf", scaleFilter(MAX_EDGE),
    "-c:v", "libx264", "-preset", "fast", "-crf", String(VIDEO_CRF),
    "-pix_fmt", "yuv420p",
    "-c:a", "aac", "-b:a", "128k",
    "-movflags", "+faststart",
    outMp4,
  ]);
}

function extractPoster(src, outJpg, duration) {
  const ts = duration > 2 ? Math.min(1.2, duration * 0.15) : 0;
  run("ffmpeg", [
    "-y", "-ss", String(ts), "-i", src,
    "-frames:v", "1",
    "-vf", scaleFilter(MAX_EDGE),
    "-q:v", "3",
    outJpg,
  ]);
}

function encodeImage(src, outJpg) {
  run("ffmpeg", [
    "-y", "-i", src,
    "-vf", scaleFilter(IMAGE_MAX),
    "-q:v", "3",
    outJpg,
  ]);
}

/* ── Main ─────────────────────────────────────────────────────────────────── */

function main() {
  if (!fs.existsSync(SRC_DIR)) {
    console.error(`✗ Source folder not found: ${SRC_DIR}`);
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const categories = [];
  const catDirs = fs
    .readdirSync(SRC_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort(naturalCompare);

  // PASS 1 — probe everything and write the manifest immediately (fast),
  // so the site has data while heavy encoding continues.
  const work = []; // { type, src, outMedia, outPoster, item, duration }

  for (const catName of catDirs) {
    const catSlug = slugify(catName);
    const displayName = NAME_OVERRIDES[catSlug] || titleCase(catName);
    const outCatDir = path.join(OUT_DIR, catSlug);
    fs.mkdirSync(outCatDir, { recursive: true });

    const files = fs
      .readdirSync(path.join(SRC_DIR, catName), { withFileTypes: true })
      .filter((f) => f.isFile())
      .map((f) => f.name)
      .filter((n) => VIDEO_EXT.has(path.extname(n).toLowerCase()) || IMAGE_EXT.has(path.extname(n).toLowerCase()))
      .sort(naturalCompare);

    const items = [];
    const usedNames = new Set();

    files.forEach((fileName, i) => {
      const ext = path.extname(fileName).toLowerCase();
      const stem = path.basename(fileName, ext);
      let base = slugify(stem) || `item-${i + 1}`;
      while (usedNames.has(base)) base = `${base}-${i + 1}`;
      usedNames.add(base);

      const src = path.join(SRC_DIR, catName, fileName);
      const { width, height, duration } = probe(src);
      const isVideo = VIDEO_EXT.has(ext);

      const title = /^\d+$/.test(stem.trim()) ? `${displayName} · ${stem}` : titleCase(stem);
      const publicBase = `/portfolio/media/${catSlug}/${base}`;

      if (isVideo) {
        const outMp4 = path.join(outCatDir, `${base}.mp4`);
        const outJpg = path.join(outCatDir, `${base}.jpg`);
        const item = {
          id: `${catSlug}-${base}`,
          title,
          type: "video",
          src: `${publicBase}.mp4`,
          poster: `${publicBase}.jpg`,
          width,
          height,
          orientation: orientationOf(width, height),
          duration: Math.round(duration),
          category: displayName,
          categorySlug: catSlug,
        };
        items.push(item);
        work.push({ type: "video", src, outMedia: outMp4, outPoster: outJpg, duration });
      } else {
        const outJpg = path.join(outCatDir, `${base}.jpg`);
        const item = {
          id: `${catSlug}-${base}`,
          title,
          type: "image",
          src: `${publicBase}.jpg`,
          poster: `${publicBase}.jpg`,
          width,
          height,
          orientation: orientationOf(width, height),
          duration: 0,
          category: displayName,
          categorySlug: catSlug,
        };
        items.push(item);
        work.push({ type: "image", src, outMedia: outJpg });
      }
    });

    if (items.length) {
      categories.push({
        slug: catSlug,
        name: displayName,
        description: DESCRIPTIONS[catSlug] || `${displayName}: AI-produced creative from my portfolio.`,
        count: items.length,
        items,
      });
    }
  }

  // Apply the configured display order (unlisted categories fall to the end).
  const orderRank = (slug) => {
    const i = CATEGORY_ORDER.indexOf(slug);
    return i === -1 ? Number.MAX_SAFE_INTEGER : i;
  };
  categories.sort((a, b) => {
    const ra = orderRank(a.slug);
    const rb = orderRank(b.slug);
    return ra !== rb ? ra - rb : naturalCompare(a.name, b.name);
  });

  const manifest = {
    generatedAt: new Date().toISOString(),
    categoryCount: categories.length,
    itemCount: categories.reduce((n, c) => n + c.items.length, 0),
    categories,
  };
  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
  console.log(`✓ Manifest written: ${categories.length} categories, ${manifest.itemCount} items`);

  // PASS 2 — heavy encoding (skips up-to-date outputs).
  let done = 0;
  const total = work.length;
  for (const w of work) {
    done++;
    const label = `[${done}/${total}] ${path.relative(ROOT, w.src)}`;
    try {
      if (w.type === "video") {
        if (!isNewer(w.outMedia, w.src)) {
          console.log(`⏳ encode  ${label}`);
          encodeVideo(w.src, w.outMedia);
        } else {
          console.log(`↷ skip    ${label}`);
        }
        if (!isNewer(w.outPoster, w.src)) extractPoster(w.src, w.outPoster, w.duration);
      } else {
        if (!isNewer(w.outMedia, w.src)) {
          console.log(`🖼  image   ${label}`);
          encodeImage(w.src, w.outMedia);
        } else {
          console.log(`↷ skip    ${label}`);
        }
      }
    } catch (e) {
      console.error(`✗ failed  ${label}\n   ${e.message}`);
    }
  }

  console.log("✓ Media pipeline complete.");
}

main();
