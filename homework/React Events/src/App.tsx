import { useState } from "react";
import "./App.css";
import DiceRoll from "./Components/DiceRoll/DiceRoll";
import ContactCard from "./Components/ContactCard/ContactCard";
// import MyButton from "./Components/My Button/MyButton";

function App() {
  return (
    <>
      {/* <MyButton label={"Sign In"} />
      <MyButton label={"Sign Out"} /> */}
      {/* <DiceRoll /> */}
      <ContactCard />
    </>
  );
}

export default App;
