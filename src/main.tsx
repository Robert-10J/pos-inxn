import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './routes.tsx'
import { ThemeProvider } from '@material-tailwind/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './views/Layout.tsx'
import Sales from './pages/Sales.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/sales', element: <Sales/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </ThemeProvider>
)
