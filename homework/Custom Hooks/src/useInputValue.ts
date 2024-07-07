import { SetStateAction, useState } from "react";

export const useInputValue = () => {
  const [data, setData] = useState("");
  const handleData = (e: { target: { value: SetStateAction<string> } }) => {
    setData(e.target.value);
  };
  return { data: data, handleData: handleData };
};
