import { Loader2, LucideBadgeQuestionMark } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { authClient } from '@/lib/auth-client'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

interface LoginFormProps extends React.ComponentProps<'div'> {
  initialView?: 'login' | 'signup'
}

export function LoginForm({
  className,
  initialView = 'login',
  ...props
}: LoginFormProps) {
  const [view, setView] = useState<'login' | 'signup'>(initialView)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('') // Good practice for Better Auth signUp
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setView(initialView)
  }, [initialView])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (view === 'login') {
        await authClient.signIn.email(
          {
            email,
            password,
            callbackURL: '/',
          },
          {
            onRequest: () => setLoading(true),
            onError: (ctx) => setError(ctx.error.message || 'Failed to login'),
          },
        )
      } else {
        await authClient.signUp.email(
          {
            email,
            password,
            name: name || email.split('@')[0], // Fallback if name isn't provided
            callbackURL: '/',
          },
          {
            onRequest: () => setLoading(true),
            onError: (ctx) =>
              setError(ctx.error.message || 'Failed to sign up'),
          },
        )
      }
    } catch (err) {
      setError('An unexpected error occurred.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-full bg-blue-50 shadow">
                <LucideBadgeQuestionMark className="size-6 text-blue-700" />
              </div>
              <span className="sr-only">QuizCompile</span>
            </a>
            <h1 className="text-xl font-bold">
              Welcome {view === 'login' && 'Back'} to QuizCompile
            </h1>
            <FieldDescription>
              {view === 'login' ? (
                <>
                  Don&apos;t have an account?{' '}
                  <Link to="/auth" search={{ mode: 'signup' }} className="font-medium text-primary hover:underline">
                    Sign up
                  </Link>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <Link to="/auth" search={{ mode: 'login' }} className="font-medium text-primary hover:underline">
                    Login
                  </Link>
                </>
              )}
            </FieldDescription>
          </div>
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md border border-red-200">
              {error}
            </div>
          )}
          {view === 'signup' && (
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Field>
          )}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              type="password"
              placeholder="*********"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </Field>
          <Field>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {view === 'login' ? 'Login' : 'Sign up'}
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{' '}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
