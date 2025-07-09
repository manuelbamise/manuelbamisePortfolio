import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { GlassPillNav } from '../components/GlassPillNav'

export const Route = createRootRoute({
  component: () => (
    <>
      <GlassPillNav />
      {/* <div className="p-2 flex gap-2"> */}
      {/*   <Link to="/" className="[&.active]:font-bold"> */}
      {/*     Home */}
      {/*   </Link>{' '} */}
      {/*   <Link to="/about" className="[&.active]:font-bold"> */}
      {/*     About */}
      {/*   </Link> */}
      {/* </div> */}

      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
