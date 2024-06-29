import { createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import About from "./pages/About";
import Root from "./components/Root";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Faq from "./pages/Faq";
import NotFound from "./pages/NotFound";

const Router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "/auth",
        element: <Auth />,
        children: [
          {
            path: "signup",
            element: <SignUp />,
          },
          {
            path: "login",
            element: <LogIn />,
          },
        ],
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
        path: "faq",
        element: <Faq />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Router;
