import { SectionIntro } from "@/components/landing/section-intro";
import { useLandingAuthState } from "@/components/landing/use-landing-auth-state";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface CallToActionSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  supportingPoints: string[];
}

export function CallToActionSection({
  id,
  eyebrow,
  title,
  description,
  supportingPoints,
}: CallToActionSectionProps) {
  const { isAuthenticated } = useLandingAuthState();
  return (
    <section
      id={id}
      aria-labelledby="final-cta-title"
      aria-describedby="final-cta-description"
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/80 bg-card/90 p-8 shadow-sm sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
            <div className="max-w-2xl">
              <SectionIntro
                eyebrow={eyebrow}
                title={title}
                titleId="final-cta-title"
                description={description}
                descriptionId="final-cta-description"
                className="max-w-none"
                titleClassName="sm:text-4xl"
              />

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {isAuthenticated ? (
                  <>
                    <Button asChild size="lg">
                      <a href="#features">
                        Explore features
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="#audiences">Review audience benefits</a>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button asChild size="lg">
                      <Link to="/auth" search={{ mode: "signup" }}>
                        Get started
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link to="/auth" search={{ mode: "login" }}>
                        Sign in
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-border/80 bg-background/80 p-6 sm:p-8">
              <h3 className="text-lg font-semibold tracking-tight">
                What visitors should expect
              </h3>
              <ul
                className="mt-4 space-y-3"
                aria-label="Final call to action highlights"
              >
                {supportingPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
