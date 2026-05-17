import { useLandingAuthState } from "@/components/landing/use-landing-auth-state";
import { Link } from "@tanstack/react-router";

const footerLinkClassName =
  "rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export function LandingFooter() {
  const { isAuthenticated } = useLandingAuthState();
  return (
    <footer className="border-t border-border/80 bg-background/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-muted-foreground sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-medium text-foreground">QuizCompile</p>
          <p>Quizzes, writing, and coding for modern higher education.</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-4">
          <a href="#main-content" className={footerLinkClassName}>
            Back to top
          </a>
          {!isAuthenticated ? (
            <>
              <Link
                to="/auth"
                search={{ mode: "signup" }}
                className={footerLinkClassName}
              >
                Get started
              </Link>
              <Link
                to="/auth"
                search={{ mode: "login" }}
                className={footerLinkClassName}
              >
                Sign in
              </Link>
            </>
          ) : null}
        </nav>
      </div>
    </footer>
  );
}
