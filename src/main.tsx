import { StrictMode } from 'react'
import { ThemeProvider } from './components/theme-provider.tsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
