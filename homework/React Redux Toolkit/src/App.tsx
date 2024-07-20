import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement, incrementByAmount } from "./counterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <p>Count is: {count} </p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(33))}>
          Count + 33
        </button>
      </div>
    </>
  );
}

export default App;
