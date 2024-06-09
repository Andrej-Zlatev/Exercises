import { useState, useEffect } from "react";

const PredictAge = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  const showAge = () => {
    fetch(`https://api.agify.io/?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setAge(data);
      });
  };

  useEffect(() => {
    showAge();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Name.."
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={showAge}>Show Age</button>
      {age && (
        <div>
          <p>Name: {age.name}</p>
          <p>Age: {age.age}</p>
        </div>
      )}
    </div>
  );
};

export default PredictAge;
