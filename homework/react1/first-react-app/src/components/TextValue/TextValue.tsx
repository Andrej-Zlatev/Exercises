import { useState } from "react";

const TextValue = () => {
  const [inputValue, setInputValue] = useState("");
  const changeValue = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <h4>Text Input</h4>
      <input type="text" onChange={changeValue} />
      <p>{inputValue}</p>
    </div>
  );
};

export default TextValue;
