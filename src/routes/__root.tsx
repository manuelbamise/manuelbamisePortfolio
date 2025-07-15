import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { GlassPillNav } from '../components/AdditionalComponents/GlassPillNav'
import Footer from '../components/sections/FooterSection'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='flex flex-col justify-between min-h-screen'>

        <div>
          <GlassPillNav />
          <Outlet />
          <TanStackRouterDevtools />
        </div>

        <div className='text-center'>
          <Footer />
        </div>

      </div>
    </>
  ),
})
