import { useReducer } from "react";

const people = [
  {
    name: "John",
  },
  {
    name: "Jane",
  },
];

const numbers = [1, 23, 4, 5, 566];

interface peopleType {
  name: string;
}

interface stateType {
  showNames: boolean;
  people: peopleType[];
  numbers: number[];
}

const defaultState: stateType = {
  people: people,
  numbers: numbers,
  showNames: true,
};

const reducer = (state, action) => {
  if (action.type === "TOGGLE_NAMES") {
    return {
      ...state,
      showNames: !state.showNames,
    };
  }
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleNames = () => {
    dispatch({
      type: "TOGGLE_NAMES",
    });
  };
  return (
    <div>
      {state.showNames &&
        people.map((person) => <p key={person.name}>{person.name} </p>)}
      <div>
        {state.numbers.map((number: number, index: number) => (
          <p key={index}>{number}</p>
        ))}
      </div>
      <button onClick={handleNames}>Toggle Names</button>
    </div>
  );
};

export default ReducerBasics;
