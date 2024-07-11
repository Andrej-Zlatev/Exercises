import { useContext } from "react";
import { myContext } from "../App";

const GrandChildren = () => {
  const { firstName, handleActive, isActive } = useContext(myContext);

  return (
    <div>
      <button onClick={handleActive}>Press</button>
      {isActive && <p>Grand Children - {firstName}</p>}
    </div>
  );
};

export default GrandChildren;
