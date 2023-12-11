import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import MovieById from "./components/movie-by-id/movie-by-id";
import Movies from "./pages/movies";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/movies",
      element: <Movies />,
    },
    {
      path: "/movie/:movieId",
      element: <MovieById />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
