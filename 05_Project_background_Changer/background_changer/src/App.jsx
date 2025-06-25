import { useState } from "react";
import { CustomButtons } from "./components/CustomButtons.jsx";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <>
      <div
        className="h-screen w-full flex items-end pb-10"
        style={{ backgroundColor: color }}
      >
        <div className="w-full flex flex-wrap justify-evenly gap-3">
          <CustomButtons
            title="Violet"
            bgc="violet"
            textColor="black"
            setColor={setColor}
          />
          <CustomButtons title="Indigo" bgc="indigo" setColor={setColor} />
          <CustomButtons title="Blue" bgc="blue" setColor={setColor} />
          <CustomButtons title="Green" bgc="green" setColor={setColor} />
          <CustomButtons
            title="Yellow"
            bgc="yellow"
            textColor="black"
            setColor={setColor}
          />
          <CustomButtons title="Red" bgc="red" setColor={setColor} />
        </div>
      </div>
    </>
  );
}

export default App;
