import { SectionIntro } from "@/components/landing/section-intro";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

interface AudienceCard {
  label: string;
  title: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
}

interface AudienceSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  audiences: AudienceCard[];
}

export function AudienceSection({
  id,
  eyebrow,
  title,
  description,
  audiences,
}: AudienceSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby="audience-section-title"
      aria-describedby="audience-section-description"
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow={eyebrow}
          title={title}
          titleId="audience-section-title"
          description={description}
          descriptionId="audience-section-description"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            const headingId = `${audience.label.toLowerCase().replace(/\s+/g, "-")}-title`;

            return (
              <article
                key={audience.label}
                aria-labelledby={headingId}
                className="rounded-3xl border border-border/80 bg-card/90 p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-accent p-3 text-accent-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                      {audience.label}
                    </p>
                    <h3
                      id={headingId}
                      className="mt-2 text-xl font-semibold tracking-tight"
                    >
                      {audience.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-muted-foreground sm:text-base">
                  {audience.description}
                </p>

                <div className="mt-6">
                  <p className="text-sm font-medium text-foreground">
                    Key benefits
                  </p>
                  <ul
                    className="mt-3 space-y-3"
                    aria-label={`${audience.label} benefits`}
                  >
                    {audience.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex gap-3 text-sm leading-6 sm:text-base"
                      >
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export type { AudienceCard };
