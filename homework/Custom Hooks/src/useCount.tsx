import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const result: [number, () => void, () => void, () => void] = [
    count,
    increase,
    decrease,
    reset,
  ];
  return result;
};
