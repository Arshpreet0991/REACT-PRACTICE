import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(5);
  let counter = count;

  function increaseValue() {
    counter = count + 1;
    if (counter > 10) {
      setCount(10);
    } else {
      setCount(counter);
    }
  }

  function decreaseValue() {
    counter = count - 1;
    if (counter < 0) {
      setCount(0);
    } else {
      setCount(counter);
    }
  }

  return (
    <>
      <h1>Chai aur REACT</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={increaseValue}>Increase Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );

  /*
  let counter = 15;

  function addValue() {
    counter = counter + 1;
    console.log(counter);

    document.getElementById(
      "currentCounter"
    ).innerHTML = `Current Counter: ${counter}`;

    document.getElementById(
      "addNewValue"
    ).innerHTML = `New Value After Addition: ${counter}`;
  }

  function removeValue() {
    counter = counter - 1;
    console.log(counter);

    document.getElementById(
      "currentCounter"
    ).innerHTML = `Current Counter: ${counter}`;

    document.getElementById(
      "subtractNewValue"
    ).innerHTML = `New Value After Addition: ${counter}`;
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2 id="currentCounter">Current Counter: {counter}</h2>
      <button onClick={addValue} id="addValue">
        Add Value
      </button>
      <p id="addNewValue">New Value After Addition: {counter}</p>

      <button onClick={removeValue} id="decreaseValue">
        Remove Value
      </button>
      <p id="subtractNewValue">New Value After Subtraction: {counter}</p>
    </>
  );

  */
}

export default App;
