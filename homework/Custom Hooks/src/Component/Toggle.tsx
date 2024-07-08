import { useToggle } from "../useToggle";

const Toggle = () => {
  const [isVisible, toggle] = useToggle();

  return (
    <div>
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <p>Hidden Text</p>}
    </div>
  );
};

export default Toggle;
