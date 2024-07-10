import { useState } from "react";

export const useLogin = () => {
  const [password, setPassword] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Logged in");
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return { isLogged: password.length <= 8, handlePassword, onSubmit };
};
