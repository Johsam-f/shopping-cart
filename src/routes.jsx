import HomePage from './pages/home'
import ErrorPage from './pages/errorPage'
import Dashboard from './pages/Dashboard';
import Games from './components/Games';
import GameDetails from './pages/GameDetails';

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
      path: "/game_details/:name/:id",
      element: <GameDetails />
    }
  ]

export default routes;