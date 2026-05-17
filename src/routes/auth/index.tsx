import { LoginForm } from '@/components/login-form'
import { createFileRoute, redirect } from '@tanstack/react-router'

interface AuthSearch {
  mode: 'login' | 'signup'
}

export const Route = createFileRoute('/auth/')({
  validateSearch: (search): AuthSearch => ({
    mode: search.mode === 'signup' ? 'signup' : 'login',
  }),
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    if (context.isAuthenticated) {
      throw redirect({
        to: '/',
      })
    }
  },
})

function RouteComponent() {
  const { mode } = Route.useSearch()

  return (
    <div className="container mx-auto flex flex-1 items-center justify-center px-4 py-10">
      <LoginForm
        initialView={mode}
        className="w-full max-w-md rounded-lg bg-card p-6 shadow-xl"
      />
    </div>
  )
}
