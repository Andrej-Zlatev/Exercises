import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Root = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

export default Root;
