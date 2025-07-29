import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <div className='border-3 border-fuchsia-300'>Hello "__root"!</div>
      <Outlet />
    </React.Fragment>
  )
}
