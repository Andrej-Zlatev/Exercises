import "./App.css";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <>
      <Welcome name="John" age={34} />
      <Welcome name="Jane" age={33} />
    </>
  );
}

export default App;
