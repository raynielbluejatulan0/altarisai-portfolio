import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyBlock } from "@/components/case-study/CaseStudyBlock";
import { ResultsGrid } from "@/components/case-study/ResultsGrid";
import { TestimonialCard } from "@/components/case-study/TestimonialCard";
import { CaseStudyCta } from "@/components/case-study/CaseStudyCta";
import { SmartMedia } from "@/components/media/SmartMedia";
import { PORTFOLIO_PROJECTS, getProjectBySlug, type MediaAsset } from "@/lib/portfolio";

interface CaseStudyPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
  };
}

function MediaGrid({ assets, cols = 4 }: { assets: MediaAsset[]; cols?: 3 | 4 }) {
  const colClass = cols === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";
  return (
    <div className={`grid grid-cols-2 gap-4 ${colClass}`}>
      {assets.map((asset, i) => (
        <SmartMedia key={i} asset={asset} sizes="(max-width: 768px) 50vw, 25vw" />
      ))}
    </div>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return <p className="text-base leading-relaxed text-foreground-muted">{children}</p>;
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const cs = project.caseStudy;
  let n = 0;
  const next = () => ++n;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-5xl pb-10">
        <CaseStudyHero project={project} />

        <CaseStudyBlock index={next()} eyebrow="The Project" title="Overview">
          <Prose>{cs.overview}</Prose>
        </CaseStudyBlock>

        <CaseStudyBlock index={next()} eyebrow="The Problem" title="Business Challenge">
          <Prose>{cs.challenge}</Prose>
        </CaseStudyBlock>

        <CaseStudyBlock index={next()} eyebrow="The Approach" title="Creative Strategy">
          <Prose>{cs.strategy}</Prose>
        </CaseStudyBlock>

        {cs.research && (
          <CaseStudyBlock index={next()} eyebrow="Groundwork" title="Research">
            <Prose>{cs.research}</Prose>
          </CaseStudyBlock>
        )}

        {cs.customerPsychology && (
          <CaseStudyBlock index={next()} eyebrow="The Buyer" title="Customer Psychology">
            <Prose>{cs.customerPsychology}</Prose>
          </CaseStudyBlock>
        )}

        {cs.hookStrategy && (
          <CaseStudyBlock index={next()} eyebrow="First Two Seconds" title="Hook Strategy">
            <Prose>{cs.hookStrategy.intro}</Prose>
            <ul className="mt-6 space-y-3">
              {cs.hookStrategy.hooks.map((hook, i) => (
                <li key={hook} className="glow-card flex items-center gap-4 rounded-2xl px-5 py-4">
                  <span className="font-display text-xs font-bold text-accent">
                    H{i + 1}
                  </span>
                  <span className="text-sm text-foreground">{hook}</span>
                </li>
              ))}
            </ul>
          </CaseStudyBlock>
        )}

        {cs.script && (
          <CaseStudyBlock index={next()} eyebrow="The Words" title="Script">
            <Prose>{cs.script.intro}</Prose>
            {cs.script.excerpt ? (
              <blockquote className="glow-card mt-6 rounded-2xl border-l-2 border-l-accent/50 p-6 text-sm leading-relaxed text-foreground-muted">
                {cs.script.excerpt}
              </blockquote>
            ) : (
              <div className="glow-card mt-6 rounded-2xl border-dashed p-8 text-center">
                <p className="font-body text-[0.65rem] uppercase tracking-[0.25em] text-accent-muted">
                  Full Script
                </p>
                <p className="mt-2 text-sm text-foreground-dim">Coming Soon</p>
              </div>
            )}
          </CaseStudyBlock>
        )}

        <CaseStudyBlock index={next()} eyebrow="Pre-Production" title="Storyboard" wide>
          <MediaGrid assets={cs.storyboard} cols={4} />
        </CaseStudyBlock>

        <CaseStudyBlock index={next()} eyebrow="Production" title="AI Images" wide>
          <MediaGrid assets={cs.aiImages} cols={4} />
        </CaseStudyBlock>

        <CaseStudyBlock index={next()} eyebrow="The Deliverable" title="Final AI Video" wide>
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
            {cs.finalVideos.map((asset, i) => (
              <SmartMedia key={i} asset={asset} sizes="(max-width: 768px) 50vw, 33vw" />
            ))}
          </div>
        </CaseStudyBlock>

        {cs.editingProcess && (
          <CaseStudyBlock index={next()} eyebrow="Post-Production" title="Editing Process">
            <Prose>{cs.editingProcess}</Prose>
          </CaseStudyBlock>
        )}

        <CaseStudyBlock index={next()} eyebrow="What Shipped" title="Deliverables">
          <ul className="grid gap-3 sm:grid-cols-2">
            {cs.deliverables.map((item) => (
              <li key={item} className="glow-card rounded-2xl px-5 py-4 text-sm text-foreground">
                {item}
              </li>
            ))}
          </ul>
        </CaseStudyBlock>

        <CaseStudyBlock index={next()} eyebrow="Performance" title="Results" wide>
          <ResultsGrid results={cs.results} />
        </CaseStudyBlock>

        <CaseStudyBlock index={next()} eyebrow="In Their Words" title="Client Testimonial">
          <div className="max-w-xl">
            <TestimonialCard testimonial={cs.testimonial} />
          </div>
        </CaseStudyBlock>

        {cs.lessons && cs.lessons.length > 0 && (
          <CaseStudyBlock index={next()} eyebrow="Takeaways" title="Lessons Learned">
            <ul className="space-y-3">
              {cs.lessons.map((lesson) => (
                <li key={lesson} className="flex items-start gap-3 text-base leading-relaxed text-foreground-muted">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  {lesson}
                </li>
              ))}
            </ul>
          </CaseStudyBlock>
        )}

        <CaseStudyCta />
      </article>
    </div>
  );
}
