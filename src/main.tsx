import { StrictMode } from 'react'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './lib/theme-config/theme-provider.tsx'


// Import the generated route tree
import { routeTree } from './routeTree.gen'
import NotFound from './components/AdditionalComponents/NotFound.tsx'

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
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
