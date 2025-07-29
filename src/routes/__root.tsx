import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { GlassPillNav } from '@/components/additionalComponents/GlassPillNav'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <div className='flex flex-col justify-between min-h-screen'>

        <div>
          <GlassPillNav />
          <Outlet />
        </div>

        {/* <div className='text-center'> */}
        {/*   <Footer /> */}
        {/* </div> */}
        {/**/}
      </div>    </React.Fragment>
  )
}
