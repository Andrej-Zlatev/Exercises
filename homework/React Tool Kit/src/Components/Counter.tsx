import { useReducer } from "react";

interface countStateType {
  count: number;
}
const initialState: countStateType = {
  count: 0,
};

const reducer = (state, action) => {
  if (action.type === "Increment") {
    return { count: state.count + 1 };
  } else if (action.type === "Decrement") {
    return { count: state.count - 1 };
  } else if (action.type === "Reset") {
    return { count: 0 };
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({
      type: "Increment",
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: "Decrement",
    });
  };

  const HandleReset = () => {
    dispatch({
      type: "Reset",
    });
  };

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} disabled={state?.count === 0}>
        Decrement
      </button>
      <button onClick={HandleReset}>Reset</button>
    </div>
  );
};

export default Counter;
