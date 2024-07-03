import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/moviedetails/:id",
    element: <MovieDetails />,
  },
]);

export default router;
