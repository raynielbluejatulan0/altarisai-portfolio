import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { CTASection } from "@/components/sections/CTASection";
import { CATEGORIES, getCategory, GENERATED_AT, isoDuration } from "@/lib/media";
import { SITE } from "@/lib/constants";

interface CategoryPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const cat = getCategory(params.slug);
  if (!cat) return {};
  return {
    title: `${cat.name} · Portfolio`,
    description: cat.description,
    alternates: { canonical: `/portfolio/${cat.slug}` },
  };
}

const abs = (p: string) => (p.startsWith("http") ? p : `${SITE.url}${p}`);

export default function CategoryPage({ params }: CategoryPageProps) {
  const cat = getCategory(params.slug);
  if (!cat) notFound();

  const others = CATEGORIES.filter((c) => c.slug !== cat.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Portfolio", item: `${SITE.url}/portfolio` },
          { "@type": "ListItem", position: 3, name: cat.name, item: `${SITE.url}/portfolio/${cat.slug}` },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${SITE.url}/portfolio/${cat.slug}#collection`,
        name: `${cat.name} · ${SITE.name}`,
        url: `${SITE.url}/portfolio/${cat.slug}`,
        description: cat.description,
        isPartOf: { "@id": `${SITE.url}/#website` },
      },
      {
        "@type": "ItemList",
        numberOfItems: cat.items.length,
        itemListElement: cat.items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item:
            it.type === "video"
              ? {
                  "@type": "VideoObject",
                  name: it.title,
                  description: `${it.title} — ${cat.name} by ${SITE.name}.`,
                  thumbnailUrl: abs(it.poster),
                  contentUrl: abs(it.src),
                  uploadDate: GENERATED_AT,
                  duration: isoDuration(it.duration),
                  publisher: { "@id": `${SITE.url}/#organization` },
                }
              : {
                  "@type": "ImageObject",
                  name: it.title,
                  description: `${it.title} — ${cat.name} by ${SITE.name}.`,
                  contentUrl: abs(it.src),
                  thumbnailUrl: abs(it.poster),
                },
        })),
      },
    ],
  };

  return (
    <div className="px-4 pb-24 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl">
        {/* Back */}
        <Link
          href="/portfolio"
          className="group mb-8 inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          All Work
        </Link>

        {/* Header */}
        <header className="mb-14 max-w-3xl">
          <span className="tag">{cat.count} {cat.count === 1 ? "Piece" : "Pieces"}</span>
          <h1 className="section-title mt-5 text-balance">{cat.name}</h1>
          <p className="section-subtitle mx-0">{cat.description}</p>
        </header>

        <GalleryGrid items={cat.items} priorityCount={6} />

        {/* Explore other categories */}
        <div className="mt-24 border-t border-white/[0.06] pt-14">
          <h2 className="font-display mb-6 text-lg font-bold text-foreground">Explore more work</h2>
          <div className="flex flex-wrap gap-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/portfolio/${c.slug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-foreground-muted transition-all hover:border-white/20 hover:text-white"
              >
                {c.name}
                <span className="text-foreground-dim">{c.count}</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <CTASection />
      </div>
    </div>
  );
}
