import { useState } from "react";

const Main = () => {
  const [name, setName] = useState("John");
  const changeName = () => {
    setName("Jane");
  };
  return (
    <div>
      <p>{name}</p>
      <button id="btn" onClick={changeName}>
        Button
      </button>
    </div>
  );
};

export default Main;
