import { useState } from "react";
import "./Menu.css";

const Menu = () => {
  const [display, setDisplay] = useState(true);

  const toggleMenu = () => {
    setDisplay(!display);
  };
  return (
    <div>
      <button onClick={toggleMenu}>X</button>
      <p className={display ? "active" : "hidden"}>MENU </p>
    </div>
  );
};

export default Menu;
