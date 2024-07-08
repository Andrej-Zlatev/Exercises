import { useEffect, useState } from "react";

export const useTimer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prevTimer: number) => prevTimer + 1);
      console.log(id);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return timer;
};
