import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Clock from "./Components/Clock/Clock";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navigation /> */}
      <Clock />
    </>
  );
}

export default App;
