import { useState } from "react";

const Main = () => {
  const [name, setName] = useState("John");
  const [age, setAge] = useState(30);
  const changeName = () => {
    setName("Jane");
    setAge(29);
  };
  return (
    <div>
      <p>
        {name} is {age} years old{" "}
      </p>
      <button id="btn" onClick={changeName}>
        Click
      </button>
    </div>
  );
};

export default Main;
