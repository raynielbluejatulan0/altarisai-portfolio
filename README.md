# ALTARIS AI — altarisai.online

Marketing site for **ALTARIS AI**, an AI-powered creative production company for
eCommerce and DTC brands. Built with Next.js 14 (App Router), Tailwind, and
Framer Motion. Deploys to [Vercel](https://vercel.com).

## Structure

Single landing page (`app/page.tsx`) composed of sections in
`components/sections/`, plus `/privacy`, `/terms`, and a branded 404.
All copy lives in **`lib/constants.ts`** — the single source of truth for
every section. External integrations are centralized in **`lib/config.ts`**.

## External integrations (env-driven — see `lib/config.ts`)

Nothing is hardcoded; connect services by setting environment variables in
`.env.local` and on Vercel, then redeploying:

| Variable | Connects | Until configured |
| --- | --- | --- |
| `NEXT_PUBLIC_CALENDLY_URL` | "Book a Discovery Call" CTAs → Calendly | CTAs route to the contact form |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Qualification form POST (e.g. Formspree) | Form composes a prefilled email |
| `NEXT_PUBLIC_CONTACT_EMAIL` | hello@altarisai.online (once the mailbox exists) | Working Gmail address is used |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 | Not loaded |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel | Not loaded |

CTA/interaction events (`lib/analytics.ts`) flow to Vercel Analytics (enable it
on the Vercel project — no keys needed) and forward to GA4/Pixel when enabled.

## Portfolio is data-driven

The portfolio is generated from a single source folder — **`/AI Videos`** —
where each subfolder is a category and each file is a piece of work. The
homepage curates it: UGC ads and commercial formats in **Selected Work**,
experimental formats in the **Creative Lab** (`lib/constants.ts` controls
which category appears where).

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

The hero showreel (`public/showreel/`) is a hand-cut ffmpeg montage of the
strongest advertising clips; the founder photo (`public/founder.jpg`) is the
optimized version of the local source portrait.

## How it fits together

| Piece | File |
| --- | --- |
| All site copy / content data | `lib/constants.ts` |
| Integration configuration | `lib/config.ts` |
| Event tracking | `lib/analytics.ts` |
| Manifest generator | `scripts/build-media.mjs` |
| Typed media layer | `lib/media.ts` |
| Portfolio card / grid / player | `components/gallery/` |
| Curated work + labels | `components/sections/WorkSection.tsx` |
| Creative Lab | `components/sections/CreativeLabSection.tsx` |
| Qualification form | `components/forms/QualificationForm.tsx` |

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```
