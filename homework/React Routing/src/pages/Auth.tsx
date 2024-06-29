import { NavLink, Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <p>Auth Page</p>
      <NavLink
        to={"signup"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Sign up
      </NavLink>
      <NavLink
        to={"login"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Log in
      </NavLink>
      <Outlet />
    </div>
  );
};

export default Auth;
