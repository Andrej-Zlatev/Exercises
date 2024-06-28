import { Link } from "react-router-dom";

const Navigation = () => {
  const routes = ["about", "auth", "home"];
  return (
    <nav>
      <p>Navigation</p>
      <ul>
        {routes.map((route, index) => (
          <Link to={`/${route}`} key={index}>
            {route}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
