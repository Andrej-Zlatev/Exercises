import { NavLink, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  return (
    <div>
      <strong>{location.pathname} - Not Found</strong>

      <div>
        <NavLink to={"home"}>Home</NavLink>
      </div>
    </div>
  );
};

export default NotFound;
