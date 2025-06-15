import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/errorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage/>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
