import { createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Root from "./components/Root";
import Home from "./pages/Home";

const Router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "*",
        element: <p>404 - not found</p>,
      },
    ],
  },
]);

export default Router;
