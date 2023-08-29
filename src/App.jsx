import { useReducer, useState } from "react";
import "./App.css";

const initState = 0;
const reducer = (state, action) => {
  //state : current state => count
  //action : param of the function dispatch => dispatch(//action)

  // if (action?.type === "increment") {
  //   return state + 1;
  // } else if (action?.type === "decrement") {
  //   return state - 1;
  // } else return 0;

  switch (action?.type) {
    case "increment":
      return state + +action?.value;
    case "decrement":
      return state - 1;
    default:
      return 0;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initState);
  const [value, setValue] = useState(0);
  return (
    <>
      <p>Counter</p>
      <p className="count">{count}</p>
      <div className="btns">
        <button
          onClick={() =>
            dispatch({
              type: "increment",
              value: 1,
            })
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
            })
          }
        >
          Decrement
        </button>
        <button onClick={() => dispatch()}>Reset</button>
        <div className="action">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="number"
          />
          <button
            onClick={() =>
              dispatch({
                type: "increment",
                value,
              })
            }
          >
            Increment by value
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
