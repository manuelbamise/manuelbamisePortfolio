import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { GlassPillNav } from '../components/GlassPillNav'

export const Route = createRootRoute({
  component: () => (
    <>
      <GlassPillNav />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
