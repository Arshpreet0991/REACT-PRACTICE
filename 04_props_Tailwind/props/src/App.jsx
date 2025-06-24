import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card } from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  console.log(CustomButtons);

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-5">
        Tailwind Test
      </h1>
    </>
  );
}

export default App;
