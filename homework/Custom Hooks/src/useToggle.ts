import { useState } from "react";

export const useToggle = () => {
  const [state, setState] = useState(false);

  const handleToggle = () => {
    setState((prevState) => !prevState);
  };

  const result: [boolean, () => void] = [state, handleToggle];
  return result;
};
