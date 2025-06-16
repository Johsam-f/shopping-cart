import HomePage from './pages/home'
import ErrorPage from './pages/errorPage'

const routes = [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage/>
    },
  ]

export default routes;