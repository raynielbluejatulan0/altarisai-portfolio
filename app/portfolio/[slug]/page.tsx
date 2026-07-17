import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { CTASection } from "@/components/sections/CTASection";
import { CATEGORIES, getCategory } from "@/lib/media";

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
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const cat = getCategory(params.slug);
  if (!cat) notFound();

  const others = CATEGORIES.filter((c) => c.slug !== cat.slug);

  return (
    <div className="px-4 pb-24 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:px-8">
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
