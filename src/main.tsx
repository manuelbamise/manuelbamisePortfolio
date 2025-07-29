import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { ThemeProvider } from './lib/theme-config/themeProvider.tsx'

import { routeTree } from './routeTree.gen'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import NotFound from './components/additionalComponents/NotFound.tsx'

// Create a new router instance
const router = createRouter({ routeTree, defaultNotFoundComponent: NotFound })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}





createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='system' storageKey='viteTheme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
