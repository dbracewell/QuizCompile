import { SectionIntro } from "@/components/landing/section-intro";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2, LockKeyhole, ShieldCheck } from "lucide-react";

interface TrustHighlight {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface TrustSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  highlights: string[];
  detailTitle: string;
  detailBody: string;
}

const trustHighlights: TrustHighlight[] = [
  {
    title: "Professional by default",
    description:
      "Clear structure, consistent language, and dependable workflows built for higher education.",
    icon: ShieldCheck,
  },
  {
    title: "Accessible in everyday use",
    description:
      "Designed to support readable content, keyboard access, and a more consistent experience across assignment types.",
    icon: CheckCircle2,
  },
  {
    title: "Privacy-conscious workflows",
    description:
      "Academic work stays in a system designed for careful handling of classroom information and secure access patterns.",
    icon: LockKeyhole,
  },
];

export function TrustSection({
  id,
  eyebrow,
  title,
  description,
  highlights,
  detailTitle,
  detailBody,
}: TrustSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby="trust-section-title"
      aria-describedby="trust-section-description"
      className="border-y border-border/70 bg-background/60 scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          <div>
            <SectionIntro
              eyebrow={eyebrow}
              title={title}
              titleId="trust-section-title"
              description={description}
              descriptionId="trust-section-description"
            />

            <div className="mt-8 grid gap-4" aria-label="Trust details">
              {trustHighlights.map((highlight) => {
                const Icon = highlight.icon;

                return (
                  <article
                    key={highlight.title}
                    className="rounded-2xl border border-border/80 bg-card/90 p-5 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-accent p-2.5 text-accent-foreground">
                        <Icon className="size-4" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold tracking-tight">
                          {highlight.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <aside
            className="space-y-6"
            aria-label="Trust summary and privacy details"
          >
            <div className="rounded-3xl border border-border/80 bg-card/90 p-6 shadow-sm sm:p-8">
              <h3 className="text-lg font-semibold tracking-tight">
                Why it matters
              </h3>
              <ul className="mt-4 space-y-3" aria-label="Trust highlights">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border/80 bg-card/90 p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Privacy and security
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {detailTitle}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
                {detailBody}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export type { TrustSectionProps };
