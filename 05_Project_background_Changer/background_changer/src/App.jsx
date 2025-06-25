import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container" className="h-full w-full">
        <button className="bg-red-600" onClick={changeBackgroundColor}>
          Red
        </button>
      </div>
    </>
  );
}

function changeBackgroundColor() {
  const container = document.getElementById("container");
  container.className("bg-red-600");
}

export default App;
