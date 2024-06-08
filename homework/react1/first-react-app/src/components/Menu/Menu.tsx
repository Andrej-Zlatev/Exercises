import { useState } from "react";

const Menu = () => {
  const [display, setDisplay] = useState(true);

  const toggleMenu = () => {
    setDisplay(!display);
  };
  return (
    <div>
      <button onClick={toggleMenu}>X</button>
      {display && <p>MENU</p>}
    </div>
  );
};

export default Menu;
