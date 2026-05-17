import { LoginForm } from '@/components/login-form'
import { ThemeToggle } from '@/components/theme-toggle'
import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const user = useQuery(api.auth.getCurrentUser)
  return (
    <div className="p-8">
      <ThemeToggle />
      <p className="mt-4 text-lg">{user?.name ?? 'Not Signed In'}</p>
      <div className="container bg-card">
        <LoginForm />
      </div>
    </div>
  )
}
