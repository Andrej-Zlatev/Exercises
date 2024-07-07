import { useEffect, useState } from "react";

export const useKey = () => {
  const [key, setKey] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      setKey(e.key);
    });
    document.addEventListener("keyup", () => {
      setKey("");
    });
  }, []);

  return key;
};
