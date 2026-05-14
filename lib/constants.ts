export const SITE = {
  name: "Rayniel Blue Jatulan",
  tagline: "AI Content Creator",
  description:
    "AI Content Creator specializing in AI-generated images, videos, and social media content. Helping brands create stunning visuals at scale. GMT+8.",
  url: "https://your-domain.com",
};

export const NAV_LINKS = [
  { label: "Work", href: "#gallery" },
  { label: "Videos", href: "#videos" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const CONTACT = {
  email: "raynielbluejatulan0@gmail.com",
  whatsapp: "https://wa.me/639171425738",
  whatsappDisplay: "+63 917 142 5738",
};

export const CONTENT_TYPES = [
  {
    title: "AI Image Generation",
    description:
      "Stunning product shots, concept art, social media visuals, and brand imagery — generated at scale using Midjourney, DALL-E, and Stable Diffusion.",
    icon: "Image",
    examples: ["Product Photography", "Concept Art", "Brand Visuals", "Ad Creatives"],
  },
  {
    title: "AI Video Creation",
    description:
      "Short-form video content, animated ads, and cinematic clips created with Runway, Pika, and Kling AI for social media and marketing campaigns.",
    icon: "Video",
    examples: ["Social Media Reels", "Product Demos", "Animated Ads", "Cinematic Clips"],
  },
  {
    title: "Social Media Content",
    description:
      "Consistent, on-brand content packs for Instagram, TikTok, Facebook, and LinkedIn — ready to post, generated in bulk.",
    icon: "Layout",
    examples: ["Instagram Posts", "TikTok Videos", "Story Templates", "Carousel Posts"],
  },
  {
    title: "YouTube Thumbnails & Assets",
    description:
      "Eye-catching thumbnails, channel art, and video graphics that drive clicks and build a recognizable brand presence on YouTube.",
    icon: "Youtube",
    examples: ["Thumbnails", "Channel Art", "End Screens", "Lower Thirds"],
  },
  {
    title: "AI UGC Content",
    description:
      "Authentic-looking user-generated content and testimonial-style videos created with AI avatars and voiceovers — no filming required.",
    icon: "Users",
    examples: ["AI Testimonials", "Unboxing Videos", "Review Content", "Lifestyle Shots"],
  },
  {
    title: "Brand Identity Visuals",
    description:
      "Logos, color palettes, mood boards, and full visual identity systems created with AI tools and refined for professional use.",
    icon: "Palette",
    examples: ["Logo Concepts", "Mood Boards", "Color Palettes", "Brand Guidelines"],
  },
];

export const TOOLS_USED = [
  { name: "Midjourney", category: "Image" },
  { name: "DALL-E 3", category: "Image" },
  { name: "Stable Diffusion", category: "Image" },
  { name: "Runway ML", category: "Video" },
  { name: "Pika Labs", category: "Video" },
  { name: "Kling AI", category: "Video" },
  { name: "ElevenLabs", category: "Audio" },
  { name: "HeyGen", category: "Avatar" },
  { name: "CapCut", category: "Editing" },
  { name: "Adobe Firefly", category: "Image" },
  { name: "Canva AI", category: "Design" },
  { name: "Leonardo AI", category: "Image" },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Brief & Direction",
    description:
      "We align on your brand, audience, and content goals. I map out the visual direction, tone, and formats before generating a single pixel.",
  },
  {
    step: "02",
    title: "AI Generation",
    description:
      "I engineer precise prompts across multiple AI tools to generate high-quality images and videos that match your brand identity.",
  },
  {
    step: "03",
    title: "Curation & Refinement",
    description:
      "From hundreds of outputs, I select and refine the best results — upscaling, editing, and polishing until every asset is production-ready.",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "Final assets delivered in your required formats, organized and ready to publish. Fast turnaround, unlimited revisions on direction.",
  },
];

export const IMPACT_STATS = [
  { value: "500+", label: "AI Images Created" },
  { value: "100+", label: "AI Videos Produced" },
  { value: "4+", label: "Years in AI Content" },
  { value: "10+", label: "Brands Served" },
];

export const IMAGE_GALLERY: { src: string; alt: string; category: string }[] = [
  { src: "/images/sample-1.jpg", alt: "AI generated product shot", category: "Product" },
  { src: "/images/sample-2.jpg", alt: "AI generated concept art", category: "Concept Art" },
  { src: "/images/sample-3.jpg", alt: "AI social media visual", category: "Social Media" },
  { src: "/images/sample-4.jpg", alt: "AI brand visual", category: "Brand" },
  { src: "/images/sample-5.jpg", alt: "AI generated ad creative", category: "Ad Creative" },
  { src: "/images/sample-6.jpg", alt: "AI generated lifestyle image", category: "Lifestyle" },
];

export const VIDEO_GALLERY: { src: string; poster: string; title: string; category: string }[] = [
  {
    src: "/videos/sample-1.mp4",
    poster: "/images/poster-1.jpg",
    title: "AI Product Video",
    category: "Product Demo",
  },
  {
    src: "/videos/sample-2.mp4",
    poster: "/images/poster-2.jpg",
    title: "Social Media Reel",
    category: "Social Media",
  },
  {
    src: "/videos/sample-3.mp4",
    poster: "/images/poster-3.jpg",
    title: "Animated Ad Creative",
    category: "Ad Creative",
  },
];
