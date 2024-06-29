import { NavLink } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  const routes = ["about", "auth", "home", "faq"];
  return (
    <nav>
      <p>Navigation</p>
      <ul>
        {routes.map((route, index) => (
          <NavLink
            to={`/${route}`}
            key={index}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {route}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
