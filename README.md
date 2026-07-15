# AI Video Ads Portfolio

Premium portfolio site for an AI Video Ads Specialist, built with Next.js 14 (App
Router), Tailwind, and Framer Motion.

## The portfolio is data-driven

The entire portfolio is generated from a single source folder — **`/AI Videos`** —
where each subfolder is a category and each file is a piece of work. Add a folder,
drop in clips, re-run the pipeline, and a new portfolio category appears
automatically. Nothing is hard-coded.

```
AI Videos/
  UGC/            1.mp4, 2.mp4, ...
  VSL/            1.mp4, ...
  3D PIXAR/       1.mp4, ...
  GRAPHICS DESIGNS/  1.jpg, ...   ← images work too
  ...
```

### Media pipeline

Raw clips (~2 GB) are far too large to serve. `scripts/build-media.mjs` uses
**ffmpeg** to turn the source folder into web-optimized assets:

- compresses each video to a streamable H.264 MP4 (`+faststart`, longest edge ≤ 1280px)
- extracts a poster/thumbnail frame per clip
- optimizes still images
- detects orientation (portrait / landscape / square) and duration
- writes **`lib/media-manifest.json`** — the single source of truth the site reads

Run it whenever you add or change media (requires `ffmpeg` + `ffprobe` on PATH):

```bash
npm run media
```

Output lands in `public/portfolio/media/<category>/…` and is committed/deployed.
The raw `/AI Videos` folder is git-ignored (local source only).

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## How it fits together

| Piece | File |
| --- | --- |
| Manifest generator | `scripts/build-media.mjs` |
| Typed data layer + helpers | `lib/media.ts` |
| Portfolio card (poster, hover-preview, play) | `components/gallery/MediaCard.tsx` |
| Fullscreen player (prev/next, keyboard, Esc) | `components/gallery/Lightbox.tsx` |
| Masonry grid + lightbox owner | `components/gallery/GalleryGrid.tsx` |
| Tabbed category browser | `components/gallery/PortfolioExplorer.tsx` |
| Homepage featured reel | `components/sections/FeaturedWorkSection.tsx` |
| Portfolio page | `app/portfolio/page.tsx` |
| Per-category pages | `app/portfolio/[slug]/page.tsx` |

## Deploy

Deploys to [Vercel](https://vercel.com). The optimized media in
`public/portfolio/media` ships with the build; the raw source folder does not.
