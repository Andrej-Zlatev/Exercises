import { useState } from "react";

const DiceRoll = () => {
  const [roll, setRoll] = useState(0);

  const handleRoll = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    setRoll(random);
  };

  return (
    <div>
      <button onClick={handleRoll}>Roll</button>
      <p>{roll}</p>
    </div>
  );
};

export default DiceRoll;
