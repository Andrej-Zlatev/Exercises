import { createContext, useState } from "react";
import "./App.css";
import Children from "./component/Children";

interface contextProps {
  firstName: string;
  handleActive: () => void;
  isActive: boolean;
}

export const myContext = createContext<contextProps | undefined>(undefined);

function App() {
  const [firstName, setFirstName] = useState<string>("John");
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <myContext.Provider value={{ firstName, handleActive, isActive }}>
        <Children />
      </myContext.Provider>
    </>
  );
}

export default App;
