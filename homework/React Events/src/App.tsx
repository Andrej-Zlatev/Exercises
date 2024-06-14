import { useState } from "react";
import "./App.css";
import MyButton from "./Components/MyButton";

function App() {
  return (
    <>
      <MyButton label={"Sign In"} />
      <MyButton label={"Sign Out"} />
    </>
  );
}

export default App;
