import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './routes.tsx'
import { ThemeProvider } from '@material-tailwind/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>,
  </ThemeProvider>
)
