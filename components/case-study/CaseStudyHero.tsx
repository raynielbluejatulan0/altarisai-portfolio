import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SmartMedia } from "@/components/media/SmartMedia";
import { LogoPlaceholder } from "@/components/placeholders/LogoPlaceholder";
import type { PortfolioProject } from "@/lib/portfolio";

interface CaseStudyHeroProps {
  project: PortfolioProject;
}

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const { caseStudy } = project;
  return (
    <header className="pb-14 pt-32 sm:pt-40">
      <Link
        href="/portfolio"
        className="inline-flex items-center gap-2 text-sm text-foreground-dim transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        All case studies
      </Link>

      <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.2fr,1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="tag">{project.niche}</span>
            <span className="text-xs uppercase tracking-[0.2em] text-foreground-dim">{project.client}</span>
          </div>
          <h1 className="font-display mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            {project.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">{project.summary}</p>
          {caseStudy.logo.kind === "image-placeholder" ? (
            <LogoPlaceholder className="mt-8" />
          ) : (
            <div className="mt-8 max-w-[8rem]">
              <SmartMedia asset={caseStudy.logo} />
            </div>
          )}
        </div>

        <SmartMedia asset={caseStudy.heroMedia} sizes="(max-width: 1024px) 100vw, 40vw" />
      </div>
    </header>
  );
}
