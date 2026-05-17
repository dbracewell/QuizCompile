import { LoginForm } from '@/components/login-form'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/')({
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
  return (
    <div className="container mx-auto items-center justify-center flex-1 flex flex-col">
      <LoginForm className="bg-white p-4 rounded-lg shadow-xl" />
    </div>
  )
}
