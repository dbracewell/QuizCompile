import { useLandingAuthState } from "@/components/landing/use-landing-auth-state";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  FileText,
  ListChecks,
  UsersRound,
} from "lucide-react";

interface WorkflowHighlight {
  title: string;
  description: string;
  icon: typeof ListChecks;
}

const proofPoints = [
  "Built for higher education workflows",
  "Clear experiences for both instructors and students",
  "Accessible, professional, and privacy-conscious by design",
];

const workflowHighlights: WorkflowHighlight[] = [
  {
    title: "Quizzes",
    description:
      "Run knowledge checks without sending students across multiple tools.",
    icon: ListChecks,
  },
  {
    title: "Writing",
    description:
      "Support structured written work in the same course experience.",
    icon: FileText,
  },
  {
    title: "Coding",
    description:
      "Keep technical assignments close to the rest of the course workflow.",
    icon: Code2,
  },
  {
    title: "Collaboration",
    description: "Enable pair-programmed work for team-based learning.",
    icon: UsersRound,
  },
];

export function HeroSection() {
  const { isAuthenticated } = useLandingAuthState();

  return (
    <section
      aria-labelledby="landing-hero-heading"
      aria-describedby="landing-hero-description landing-hero-supporting-copy"
      className="mx-auto grid max-w-6xl scroll-mt-24 gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-center lg:px-8 lg:py-24"
    >
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Modern course work, one clear workflow
        </p>
        <h1
          id="landing-hero-heading"
          className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
        >
          Course work that keeps quizzes, writing, and coding in one place.
        </h1>
        <p
          id="landing-hero-description"
          className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
        >
          QuizCompile helps colleges run engaging knowledge checks, writing
          assignments, and coding exercises with a workflow that stays clear for
          students and manageable for instructors.
        </p>
        <p
          id="landing-hero-supporting-copy"
          className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground"
        >
          Built for modern classrooms, QuizCompile brings assessment tools
          together in a professional, accessible experience designed for both
          teaching and learning.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {isAuthenticated ? (
            <Button asChild size="lg">
              <a href="#features">
                Explore features
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
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

          <Button asChild size="lg" variant="ghost">
            <a href="#features">Learn more</a>
          </Button>
        </div>

        <ul
          className="mt-8 grid gap-3 sm:grid-cols-2"
          aria-label="Key landing page highlights"
        >
          {proofPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-2xl border border-border/80 bg-background/70 px-4 py-3 text-sm leading-6 text-muted-foreground"
            >
              <CheckCircle2
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <aside
        aria-label="QuizCompile workflow overview"
        className="rounded-3xl border border-border/80 bg-card/95 p-6 shadow-sm"
      >
        <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
          <div>
            <p className="text-sm font-medium text-primary">
              Workflow snapshot
            </p>
            <h2 className="text-lg font-semibold tracking-tight">
              One platform for core course activities
            </h2>
          </div>
          <div className="rounded-full border border-border/70 bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            Professors + students
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {workflowHighlights.map((highlight) => {
            const Icon = highlight.icon;

            return (
              <article
                key={highlight.title}
                className="rounded-2xl border border-border/80 bg-background/80 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-accent p-2 text-accent-foreground">
                    <Icon className="size-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight">
                      {highlight.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </section>
  );
}
