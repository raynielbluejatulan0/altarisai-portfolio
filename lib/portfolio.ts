/**
 * Portfolio data model — single source of truth for /portfolio and case studies.
 *
 * Every media slot is a MediaAsset union. Swapping a placeholder for a real
 * asset = changing ONE object in this file, e.g.:
 *   { kind: "image-placeholder", label: "Replace With Product Image" }
 *   →  { kind: "image", src: "/portfolio/images/skincare-hero.jpg", alt: "..." }
 *
 * Drop real files into:
 *   public/portfolio/images/   public/portfolio/videos/   public/portfolio/logos/
 */

export const NICHES = [
  "Beauty & Skincare",
  "Supplements",
  "Fashion",
  "Food & Beverage",
  "Home & Kitchen",
  "Pet Products",
  "Technology",
  "SaaS",
  "Automotive",
] as const;
export type Niche = (typeof NICHES)[number];

export type Aspect = "9/16" | "16/9" | "1/1" | "4/5";

export type MediaAsset =
  | { kind: "video-placeholder"; label?: string }
  | { kind: "image-placeholder"; label: string; aspect?: Aspect }
  | { kind: "image"; src: string; alt: string; aspect?: Aspect }
  | { kind: "video"; src: string; poster?: string };

export interface Metric {
  label: string;
  /** null → rendered as "Coming Soon" — never invent numbers */
  value: string | null;
}

export interface Testimonial {
  /** null → "Client Testimonial — Coming Soon" card — never fake quotes */
  quote: string | null;
  author: string | null;
  role?: string;
}

export interface CaseStudy {
  heroMedia: MediaAsset;
  logo: MediaAsset;
  overview: string;
  challenge: string;
  strategy: string;
  research?: string;
  customerPsychology?: string;
  hookStrategy?: { intro: string; hooks: string[] };
  script?: { intro: string; excerpt: string | null };
  storyboard: MediaAsset[];
  aiImages: MediaAsset[];
  finalVideos: MediaAsset[];
  editingProcess?: string;
  deliverables: string[];
  results: Metric[];
  testimonial: Testimonial;
  lessons?: string[];
}

export interface PortfolioProject {
  slug: string;
  title: string;
  /** Placeholder label only — never a fake client name */
  client: string;
  niche: Niche;
  featured: boolean;
  summary: string;
  deliverables: string[];
  cover: MediaAsset;
  caseStudy: CaseStudy;
}

/* ─── Placeholder factories ──────────────────────────────────────────────── */

const coverPlaceholder = (label: string): MediaAsset => ({
  kind: "image-placeholder",
  label,
  aspect: "4/5",
});

const logoPlaceholder: MediaAsset = {
  kind: "image-placeholder",
  label: "Replace With Client Logo",
  aspect: "1/1",
};

const storyboardFrames = (n: number): MediaAsset[] =>
  Array.from({ length: n }, () => ({
    kind: "image-placeholder" as const,
    label: "Storyboard Frame",
    aspect: "16/9" as const,
  }));

const aiImageFrames = (n: number): MediaAsset[] =>
  Array.from({ length: n }, () => ({
    kind: "image-placeholder" as const,
    label: "AI Generated Image",
    aspect: "4/5" as const,
  }));

const finalVideoSlots = (n: number): MediaAsset[] =>
  Array.from({ length: n }, () => ({
    kind: "video-placeholder" as const,
    label: "Replace With Final Ad",
  }));

const pendingMetrics: Metric[] = [
  { label: "CTR", value: null },
  { label: "ROAS", value: null },
  { label: "CPA", value: null },
  { label: "Hook Rate", value: null },
  { label: "Watch Time", value: null },
];

const pendingTestimonial = (role: string): Testimonial => ({
  quote: null,
  author: null,
  role,
});

/* ─── Seed projects — one per niche, all placeholder media ───────────────── */

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "luxury-skincare-campaign",
    title: "Luxury Skincare Campaign",
    client: "Confidential Project",
    niche: "Beauty & Skincare",
    featured: true,
    summary:
      "A premium UGC-style ad set for a luxury skincare line — built around texture close-ups, ritual moments, and before/after storytelling.",
    deliverables: ["3 UGC Ads", "5 Hook Variations", "Storyboard", "AI Product Imagery"],
    cover: coverPlaceholder("Case Study Coming Soon"),
    caseStudy: {
      heroMedia: coverPlaceholder("Replace With Campaign Hero Image"),
      logo: logoPlaceholder,
      overview:
        "A full creative sprint for a premium skincare brand: strategy, scripts, AI-generated visuals, and final ad cuts designed for Meta and TikTok placements.",
      challenge:
        "Luxury skincare buyers are skeptical of hard-sell ads. The creative needed to feel editorial and sensorial — not like a discount-driven DTC ad — while still driving action.",
      strategy:
        "Lead with texture and ritual, not claims. Each ad opens on a tactile product moment, transitions into an authentic application scene, and closes with a single, confident benefit statement.",
      research:
        "Competitor teardown across the top skincare advertisers on Meta Ad Library — mapping which angles are saturated (dermatologist authority, ingredient science) and which are underused (evening ritual, self-reward).",
      customerPsychology:
        "The purchase is emotional before it is rational: buyers want permission to invest in themselves. The creative frames the product as a nightly ritual upgrade, then supports the decision with one clean proof point.",
      hookStrategy: {
        intro: "Five scroll-stopping openers tested against the ritual angle:",
        hooks: [
          "Texture macro — product drop in slow motion",
          "POV: the last step of your night routine",
          "Before/after skin under morning light",
          "\"I replaced 4 products with this one\"",
          "Silent unboxing with ASMR sound design",
        ],
      },
      script: {
        intro: "Full 30-second UGC script with beat-by-beat timing, VO lines, and on-screen text.",
        excerpt: null,
      },
      storyboard: storyboardFrames(4),
      aiImages: aiImageFrames(4),
      finalVideos: finalVideoSlots(3),
      editingProcess:
        "Color-graded for a warm, editorial finish. Captions styled to the brand's type system. Cutdowns produced at 30s, 15s, and 6s for placement testing.",
      deliverables: [
        "3 final UGC-style video ads (9:16)",
        "5 alternate hook openers",
        "Full storyboard + shot list",
        "AI product imagery set",
        "15s and 6s cutdowns",
      ],
      results: pendingMetrics,
      testimonial: pendingTestimonial("Skincare Brand — Coming Soon"),
      lessons: [
        "Sensorial hooks outperform claim-led hooks for premium positioning.",
        "One proof point per ad — stacking claims dilutes luxury feel.",
      ],
    },
  },
  {
    slug: "protein-supplement-launch",
    title: "Protein Supplement Launch",
    client: "Confidential Project",
    niche: "Supplements",
    featured: true,
    summary:
      "Launch creative for a performance supplement — high-energy product commercials plus UGC testimonial-style ads for creative testing.",
    deliverables: ["2 Product Commercials", "4 UGC Ads", "Creative Strategy", "Testing Matrix"],
    cover: coverPlaceholder("Case Study Coming Soon"),
    caseStudy: {
      heroMedia: coverPlaceholder("Replace With Campaign Hero Image"),
      logo: logoPlaceholder,
      overview:
        "A launch package built for paid social: hero product commercials to establish the brand, and a UGC ad set engineered for rapid creative testing.",
      challenge:
        "The supplement space is crowded and claim-restricted. The creative had to differentiate on identity and routine — not on regulated performance promises.",
      strategy:
        "Split the funnel: cinematic product spots build credibility at the top, while relatable 'day in the routine' UGC drives conversion. Every asset shares one visual system so the brand compounds.",
      customerPsychology:
        "Buyers aren't purchasing protein — they're purchasing the identity of someone who doesn't skip. The creative anchors on streaks, routine, and visible discipline.",
      hookStrategy: {
        intro: "Hooks built around routine identity and pattern interrupts:",
        hooks: [
          "5AM alarm smash-cut to shaker",
          "\"What I eat in a day\" pattern interrupt",
          "Powder pour macro with impact sound",
          "Gym bag essentials rapid-fire",
        ],
      },
      script: {
        intro: "Scripts for both commercial and UGC formats, with compliant claim language.",
        excerpt: null,
      },
      storyboard: storyboardFrames(4),
      aiImages: aiImageFrames(4),
      finalVideos: finalVideoSlots(3),
      editingProcess:
        "Punchy cut rhythm synced to sound design. Bold kinetic captions. Each UGC variant isolates one variable — hook, benefit, or CTA — for clean test reads.",
      deliverables: [
        "2 hero product commercials (16:9 + 9:16)",
        "4 UGC-style conversion ads",
        "Creative testing matrix",
        "Launch storyboard set",
      ],
      results: pendingMetrics,
      testimonial: pendingTestimonial("Supplement Brand — Coming Soon"),
      lessons: [
        "Identity-led angles sidestep claim restrictions entirely.",
        "One-variable variants make test results actually readable.",
      ],
    },
  },
  {
    slug: "ai-ugc-fashion-brand",
    title: "AI UGC for Fashion Brand",
    client: "Confidential Project",
    niche: "Fashion",
    featured: true,
    summary:
      "Virtual try-on and styling UGC ads for an apparel brand — AI-generated talent, real product, built for TikTok-native feel.",
    deliverables: ["5 UGC Ads", "Virtual Try-On Set", "Hook Library", "Styling Scripts"],
    cover: coverPlaceholder("Case Study Coming Soon"),
    caseStudy: {
      heroMedia: coverPlaceholder("Replace With Campaign Hero Image"),
      logo: logoPlaceholder,
      overview:
        "A TikTok-native ad set using AI-generated talent for virtual try-ons and styling content — production-quality variety without a single shoot day.",
      challenge:
        "Fashion ads live or die on volume and freshness. Traditional shoots couldn't keep pace with the creative refresh rate paid social demands.",
      strategy:
        "Build a repeatable AI try-on pipeline: one product flat-lay in, styled on-model scenes out. Rotate settings, seasons, and styling angles weekly without re-shooting.",
      research:
        "Analyzed top-performing apparel ads for format patterns — try-on hauls, 'styling one piece three ways', and fit-check formats dominate watch time.",
      hookStrategy: {
        intro: "Hooks matched to native TikTok fashion formats:",
        hooks: [
          "Fit check — mirror to street transition",
          "Styling one piece, three ways",
          "\"The jacket everyone asks about\"",
          "Outfit transition on beat drop",
        ],
      },
      script: {
        intro: "Styling scripts with beat timing and text-overlay direction per variant.",
        excerpt: null,
      },
      storyboard: storyboardFrames(4),
      aiImages: aiImageFrames(6),
      finalVideos: finalVideoSlots(3),
      editingProcess:
        "Native-feel editing: quick cuts, trending audio structure, on-screen text in platform-native styling rather than brand-heavy graphics.",
      deliverables: [
        "5 UGC-style try-on ads",
        "AI on-model imagery set",
        "Reusable hook library",
        "Weekly refresh templates",
      ],
      results: pendingMetrics,
      testimonial: pendingTestimonial("Fashion Brand — Coming Soon"),
      lessons: [
        "Platform-native styling beats brand-polished styling for fashion UGC.",
        "A repeatable pipeline matters more than any single hero ad.",
      ],
    },
  },
  {
    slug: "artisan-coffee-brand-ads",
    title: "Artisan Coffee Brand Ads",
    client: "Confidential Project",
    niche: "Food & Beverage",
    featured: false,
    summary:
      "Sensory-first ad creatives for a specialty coffee brand — steam, pour, and crema macros built into a morning-ritual narrative.",
    deliverables: ["3 Product Ads", "Recipe Content", "AI Imagery", "Hook Set"],
    cover: coverPlaceholder("Case Study Coming Soon"),
    caseStudy: {
      heroMedia: coverPlaceholder("Replace With Campaign Hero Image"),
      logo: logoPlaceholder,
      overview:
        "Appetite-appeal advertising for specialty coffee: macro product visuals, ritual storytelling, and subscription-focused CTAs.",
      challenge:
        "Coffee is bought on habit. The creative needed to interrupt an existing routine and make switching feel like an upgrade, not a risk.",
      strategy:
        "Own the first-sip moment. Every ad builds to it — the pour, the steam, the pause — then lands the subscription offer while the craving is active.",
      customerPsychology:
        "Specialty buyers signal taste through their choices. The creative treats the product as a small daily luxury that says something about the person drinking it.",
      hookStrategy: {
        intro: "Appetite-led hooks engineered for the first two seconds:",
        hooks: [
          "Slow-motion pour with crema macro",
          "Steam rising in morning window light",
          "\"Your café order, at home, for less\"",
          "Bean-to-cup speed run",
        ],
      },
      script: {
        intro: "Ritual-narrative scripts with sound design notes for ASMR moments.",
        excerpt: null,
      },
      storyboard: storyboardFrames(4),
      aiImages: aiImageFrames(4),
      finalVideos: finalVideoSlots(2),
      editingProcess:
        "Warm grade, slow-then-fast cut rhythm, layered ASMR sound design. Subtitle-safe framing for sound-off viewing.",
      deliverables: [
        "3 sensory product ads",
        "AI lifestyle imagery set",
        "Hook opener library",
        "Sound-off caption versions",
      ],
      results: pendingMetrics,
      testimonial: pendingTestimonial("Coffee Brand — Coming Soon"),
    },
  },
  {
    slug: "smart-kitchen-product-commercial",
    title: "Smart Kitchen Product Commercial",
    client: "Confidential Project",
    niche: "Home & Kitchen",
    featured: false,
    summary:
      "Problem-solution commercials for a smart kitchen product — demo-driven creative that makes the 'aha' moment impossible to miss.",
    deliverables: ["2 Commercials", "Demo UGC", "Before/After Set", "Cutdowns"],
    cover: coverPlaceholder("Case Study Coming Soon"),
    caseStudy: {
      heroMedia: coverPlaceholder("Replace With Campaign Hero Image"),
      logo: logoPlaceholder,
      overview:
        "Demonstration-first advertising for a kitchen innovation: show the problem everyone recognizes, then the product solving it in one unbroken moment.",
      challenge:
        "Gadget fatigue is real — viewers assume 'another kitchen gimmick'. The demo had to prove itself visually within the first five seconds.",
      strategy:
        "Compress the problem-solution arc: open on the frustrating status quo, hard-cut to the product doing it better, and let the demo be the argument.",
      hookStrategy: {
        intro: "Hooks built on instantly recognizable kitchen frustrations:",
        hooks: [
          "The mess everyone knows — then the fix",
          "Side-by-side timer race",
          "\"I almost returned this. Then—\"",
          "Satisfying result macro, reverse-revealed",
        ],
      },
      script: {
        intro: "Demo-driven scripts where every line supports what's on screen.",
        excerpt: null,
      },
      storyboard: storyboardFrames(4),
      aiImages: aiImageFrames(4),
      finalVideos: finalVideoSlots(2),
      editingProcess:
        "Clean, bright grade for kitchen environments. Split-screen comparisons. Result shots held long enough to satisfy.",
      deliverables: [
        "2 problem-solution commercials",
        "Demo-style UGC ads",
        "Before/after asset set",
        "15s and 6s cutdowns",
      ],
      results: pendingMetrics,
      testimonial: pendingTestimonial("Home Brand — Coming Soon"),
    },
  },
  {
    slug: "premium-pet-wellness-ads",
    title: "Premium Pet Wellness Ads",
    client: "Confidential Project",
    niche: "Pet Products",
    featured: false,
    summary:
      "Emotion-led creative for a premium pet wellness brand — pet-parent storytelling with product proof woven through.",
    deliverables: ["4 UGC Ads", "Emotional Spot", "Hook Set", "AI Imagery"],
    cover: coverPlaceholder("Case Study Coming Soon"),
    caseStudy: {
      heroMedia: coverPlaceholder("Replace With Campaign Hero Image"),
      logo: logoPlaceholder,
      overview:
        "Creative built for the pet-parent psyche: guilt-free, love-led storytelling that positions the product as an act of care.",
      challenge:
        "Pet wellness buyers are fiercely protective and skeptical of marketing. Anything that feels manipulative gets punished in comments.",
      strategy:
        "Let the pet carry the ad. Product enters as a supporting character in a moment of visible wellbeing — zoomies, shiny coat, easy stairs — with claims kept modest and specific.",
      customerPsychology:
        "Pet parents buy to relieve worry. The creative resolves a quiet anxiety ('am I doing enough?') with an affirming, non-judgmental tone.",
      hookStrategy: {
        intro: "Hooks that lead with the pet, not the pitch:",
        hooks: [
          "Senior dog's morning stretch, then stairs",
          "\"My vet asked what changed\"",
          "Dinner-time sprint POV",
          "Coat close-up in golden hour",
        ],
      },
      script: {
        intro: "Warm, first-person pet-parent scripts with restrained claims.",
        excerpt: null,
      },
      storyboard: storyboardFrames(4),
      aiImages: aiImageFrames(4),
      finalVideos: finalVideoSlots(3),
      editingProcess:
        "Soft grade, natural pacing, real-sound moments preserved. Captions styled friendly, not clinical.",
      deliverables: [
        "4 UGC-style pet-parent ads",
        "1 emotional brand spot",
        "AI pet lifestyle imagery",
        "Hook opener set",
      ],
      results: pendingMetrics,
      testimonial: pendingTestimonial("Pet Brand — Coming Soon"),
    },
  },
  {
    slug: "consumer-tech-launch-video",
    title: "Consumer Tech Launch Video",
    client: "Confidential Project",
    niche: "Technology",
    featured: false,
    summary:
      "A cinematic launch video plus social cutdowns for a consumer tech product — spec sheet translated into felt benefits.",
    deliverables: ["Launch Film", "3 Social Ads", "Feature Cutdowns", "Storyboard"],
    cover: coverPlaceholder("Case Study Coming Soon"),
    caseStudy: {
      heroMedia: coverPlaceholder("Replace With Campaign Hero Image"),
      logo: logoPlaceholder,
      overview:
        "A launch package that translates specifications into moments: one cinematic hero film, then feature-focused cutdowns for paid social.",
      challenge:
        "Tech launches drown in spec-speak. The creative had to make features feel like scenes from the buyer's better day — without losing credibility with enthusiasts.",
      strategy:
        "Hero film sells the feeling; cutdowns sell the feature. Each cutdown isolates one capability, demonstrated in a real-use vignette, ending on the product shot and a single spec line.",
      hookStrategy: {
        intro: "Hooks pairing spectacle with specificity:",
        hooks: [
          "Macro reveal — materials and light",
          "One feature, one impossible-seeming demo",
          "\"The spec nobody else will show you\"",
          "Day-in-the-life speed run",
        ],
      },
      script: {
        intro: "Launch film script plus per-feature cutdown scripts.",
        excerpt: null,
      },
      storyboard: storyboardFrames(6),
      aiImages: aiImageFrames(4),
      finalVideos: finalVideoSlots(2),
      editingProcess:
        "High-contrast cinematic grade, precision-timed sound design, kinetic type for spec callouts.",
      deliverables: [
        "1 cinematic launch film",
        "3 feature-focused social ads",
        "Full storyboard",
        "Spec callout graphics set",
      ],
      results: pendingMetrics,
      testimonial: pendingTestimonial("Tech Brand — Coming Soon"),
    },
  },
  {
    slug: "saas-demo-ad-sprint",
    title: "SaaS Demo Ad Sprint",
    client: "Confidential Project",
    niche: "SaaS",
    featured: false,
    summary:
      "A rapid creative-testing sprint for a B2B SaaS — pain-point hooks, UI-in-action demos, and founder-style UGC variants.",
    deliverables: ["6 Ad Variants", "Testing Matrix", "Demo Scripts", "Hook Library"],
    cover: coverPlaceholder("Case Study Coming Soon"),
    caseStudy: {
      heroMedia: coverPlaceholder("Replace With Campaign Hero Image"),
      logo: logoPlaceholder,
      overview:
        "A structured testing sprint: six ad variants across three angles, built to find the winning message before scaling spend.",
      challenge:
        "SaaS ads default to feature tours nobody watches. The creative needed to dramatize the pain first and earn the demo second.",
      strategy:
        "Three angles — time lost, error cost, and team chaos — each expressed as a UGC-style variant and a clean UI-demo variant. One variable per test cell.",
      customerPsychology:
        "B2B buyers are personally motivated: looking competent, avoiding blame, reclaiming hours. Ads speak to the human, then justify to the business.",
      hookStrategy: {
        intro: "Pain-first hooks mapped to each testing angle:",
        hooks: [
          "\"It's 6PM and you're still reconciling\"",
          "The spreadsheet error that cost a client",
          "Slack chaos screen-record montage",
          "Founder-style straight talk to camera",
        ],
      },
      script: {
        intro: "Six scripts sharing one narrative skeleton for clean comparisons.",
        excerpt: null,
      },
      storyboard: storyboardFrames(4),
      aiImages: aiImageFrames(4),
      finalVideos: finalVideoSlots(3),
      editingProcess:
        "UI captures cut to narrative beats, cursor choreography, captions optimized for feed-scroll comprehension.",
      deliverables: [
        "6 test-ready ad variants",
        "Creative testing matrix",
        "Demo capture scripts",
        "Reusable hook library",
      ],
      results: pendingMetrics,
      testimonial: pendingTestimonial("SaaS Company — Coming Soon"),
      lessons: [
        "Pain dramatization consistently out-hooks feature tours.",
        "Shared script skeletons make variant tests interpretable.",
      ],
    },
  },
  {
    slug: "automotive-accessory-campaign",
    title: "Automotive Accessory Campaign",
    client: "Confidential Project",
    niche: "Automotive",
    featured: false,
    summary:
      "Install-and-transform creative for an automotive accessory — satisfying demos, road-tested proof moments, and enthusiast-native tone.",
    deliverables: ["3 Demo Ads", "Install Content", "AI Scene Set", "Cutdowns"],
    cover: coverPlaceholder("Case Study Coming Soon"),
    caseStudy: {
      heroMedia: coverPlaceholder("Replace With Campaign Hero Image"),
      logo: logoPlaceholder,
      overview:
        "Transformation-led creative for a vehicle accessory: the install, the payoff, and the drive — cut for enthusiast credibility.",
      challenge:
        "Car enthusiasts detect marketing-speak instantly. The creative had to earn trust with authentic detail while staying accessible to everyday drivers.",
      strategy:
        "Show, don't claim: real install steps compressed into a satisfying sequence, then the payoff shot in motion. Enthusiast-accurate terminology, no overpromising.",
      hookStrategy: {
        intro: "Hooks built on transformation and satisfying process:",
        hooks: [
          "60-second install time-lapse",
          "Before/after walkaround whip-pan",
          "\"Dealer quoted $400. This cost—\"",
          "Night-drive payoff shot",
        ],
      },
      script: {
        intro: "Install-narrative scripts with enthusiast-checked terminology.",
        excerpt: null,
      },
      storyboard: storyboardFrames(4),
      aiImages: aiImageFrames(4),
      finalVideos: finalVideoSlots(2),
      editingProcess:
        "Mechanical sound design, tactile close-ups, motion shots graded for depth. Install steps chaptered for rewatchability.",
      deliverables: [
        "3 install-and-demo ads",
        "AI vehicle scene imagery",
        "Step-by-step install cut",
        "15s cutdowns",
      ],
      results: pendingMetrics,
      testimonial: pendingTestimonial("Automotive Brand — Coming Soon"),
    },
  },
];

/* ─── Helpers ────────────────────────────────────────────────────────────── */

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): PortfolioProject[] {
  return PORTFOLIO_PROJECTS.filter((p) => p.featured).slice(0, 3);
}
