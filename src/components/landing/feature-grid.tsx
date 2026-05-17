import { SectionIntro } from "@/components/landing/section-intro";
import type { LucideIcon } from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeatureGridProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  features: FeatureItem[];
}

export function FeatureGrid({
  id,
  eyebrow,
  title,
  description,
  features,
}: FeatureGridProps) {
  return (
    <section
      id={id}
      aria-labelledby="feature-grid-title"
      aria-describedby="feature-grid-description"
      className="border-y border-border/70 bg-background/60 scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow={eyebrow}
          title={title}
          titleId="feature-grid-title"
          description={description}
          descriptionId="feature-grid-description"
        />

        <ul
          className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          aria-label="Core platform features"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <li key={feature.title} className="list-none">
                <article className="h-full rounded-2xl border border-border/80 bg-card/90 p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-accent p-2 text-accent-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export type { FeatureItem };
