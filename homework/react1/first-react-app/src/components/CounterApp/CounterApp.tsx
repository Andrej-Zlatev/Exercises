import { useState } from "react";
const Counter = () => {
  const [currentNum, setNum] = useState(0);
  const addNum = () => {
    setNum(currentNum + 1);
  };
  const subtractNum = () => {
    setNum(currentNum - 1);
  };
  return (
    <div className="counter-container">
      <h1>This is my Counter</h1>
      <button onClick={subtractNum} disabled={currentNum === 0}>
        -
      </button>
      <span>{currentNum}</span>
      <button onClick={addNum} disabled={currentNum === 10}>
        +
      </button>
    </div>
  );
};

export default Counter;
