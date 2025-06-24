import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card } from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  let myobj = {
    username: "CN Tower",
  };

  return (
    <>
      <Card
        src="https://images.pexels.com/photos/29536485/pexels-photo-29536485.jpeg"
        title="CN Tower"
      />
      <Card
        src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg"
        title="Pizza"
      />
    </>
  );
}

export default App;
