import { useState, useEffect } from "react";

const FetchCatFacts = () => {
  const [fact, setFact] = useState("");

  const fetchCatFacts = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => setFact(data.fact));
  };

  useEffect(() => {
    fetchCatFacts();
  }, []);

  return (
    <div>
      <button onClick={fetchCatFacts}>Fetch Fact</button>
      <p>{fact}</p>
    </div>
  );
};

export default FetchCatFacts;
