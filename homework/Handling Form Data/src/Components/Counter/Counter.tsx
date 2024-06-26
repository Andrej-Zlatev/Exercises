import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = (state: string) => {
    if (state === "increase") {
      setCount(count + 1);
    } else if (state === "decrease") {
      setCount(count - 1);
    } else if (state === "reset") {
      setCount(0);
    }
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => handleCount("increase")}>Increase</button>
      <button onClick={() => handleCount("decrease")}>Decrease</button>
      <button onClick={() => handleCount("reset")}>Rest</button>
    </div>
  );
};

export default Counter;
