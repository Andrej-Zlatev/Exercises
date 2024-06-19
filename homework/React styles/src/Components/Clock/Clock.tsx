import { format } from "date-fns";
import { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = format(new Date(), "EEEE hh:mm:ss a");
      setDate(currentDate);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <p>{date}</p>
    </div>
  );
};

export default Clock;
