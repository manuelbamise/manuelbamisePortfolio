import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import { ThemeProvider } from './lib/theme-config/themeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='system' storageKey='viteTheme'>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
