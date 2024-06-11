import { useState, useEffect } from "react";

const Timer = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isLoaded) {
      interval = setInterval(() => {
        setDate(new Date());
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isLoaded]);

  const handleClick = () => {
    setIsLoaded(!isLoaded);
  };
  return (
    <div>
      <p> {date.toLocaleTimeString()}</p>
      <button onClick={handleClick}>{isLoaded ? "Pause" : "Start"}</button>
    </div>
  );
};

export default Timer;
