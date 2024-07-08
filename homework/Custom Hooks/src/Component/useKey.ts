import { useEffect, useState } from "react";

export const useKey = () => {
  const [key, setKey] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", function (e) {
      setKey(e.key);
    });
    document.addEventListener("keyup", function () {
      setKey("");
    });

    return () => {
      document.removeEventListener("keydown", function (e) {
        setKey(e.key);
      });
      document.removeEventListener("keyup", function () {
        setKey("");
      });
    };
  }, []);

  return key;
};
