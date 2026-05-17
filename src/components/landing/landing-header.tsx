import { useLandingAuthState } from '@/components/landing/use-landing-auth-state'
import { QuizCompileLogo } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

export function LandingHeader() {
  const { isAuthenticated } = useLandingAuthState()
  return (
    <header className="border-b border-border/80 bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold tracking-tight">
            <QuizCompileLogo linkTo="/" />
          </p>
          <p className="text-sm text-muted-foreground">
            Built for college quizzes, writing, and coding.
          </p>
        </div>

        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center gap-3 sm:justify-end"
        >
          <Button asChild variant="ghost" size="sm">
            <a href="#features">Explore features</a>
          </Button>
          {!isAuthenticated ? (
            <>
              <Button asChild size="sm">
                <Link to="/auth" search={{ mode: 'signup' }}>
                  Get started
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link to="/auth" search={{ mode: 'login' }}>
                  Sign in
                </Link>
              </Button>
            </>
          ) : null}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
