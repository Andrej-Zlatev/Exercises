import { useCount } from "../useCount";

const Count = () => {
  const [count, increase, decrease, reset] = useCount();
  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Count;
