import HomePage from './pages/home'
import ErrorPage from './pages/errorPage'
import Dashboard from './pages/Dashboard';
import Games from './components/Games';

const routes = [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage/>
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "",
          element: <Games />
        },
        {
          path: "games/:category",
          element: <Games />
        }
      ]
    },
    {
      path: "/game/:id",
      element: <ErrorPage/>,
      // element: <GameDetails />
    }
  ]

export default routes;