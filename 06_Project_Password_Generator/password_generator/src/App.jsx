import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(5);
  const [numAllowed, setNumAllowed] = useState(false);
  const [splCharAllowed, setSplCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useCallback hook- to memoise(store in cache memory) a method whenever there is a change in any of the dependencies
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const splChar = "!@#$%^&*-_=+";
    const num = "0123456789";

    if (numAllowed === true) {
      str = str + num;
    }

    if (splCharAllowed === true) {
      str = str + splChar;
    }

    for (let index = 1; index <= length; index++) {
      let randomNumber = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(randomNumber);

      setPassword(pass);
    }
  }, [length, numAllowed, splCharAllowed, setPassword]);

  // useRef hook- copy to clipboard functionality. Used to get the reference of a component to connect different components
  const passwordRef = useRef(null);

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select(); // shows the selection effect when copying the password
    window.navigator.clipboard.writeText(password); // copy password to clipboard. This window object is only available in REACT.
  }, [password]);

  // useEffect hook - to run a method whenever there is a change in any of the dependencies or Whenever a page loads
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, splCharAllowed, setPassword]);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black text-white text-2xl">
        <div className="text-center bg-gray-800 rounded-xl px-4 py-2 mt-1">
          Password Generator
          <div className=" flex items-center justify-center gap-4 rounded-xl px-4 py-2 mt-3 mb-1 text-orange-700 text-4xl">
            <input
              type="text"
              value={password}
              className="bg-white outline-none py-3 px-3 rounded-xl"
              placeholder="password"
              readOnly
              ref={passwordRef}
            />

            <button
              className="outline-none bg-blue-700 text-white px-3 py-3 shrink-0 rounded-xl"
              onClick={copyToClipBoard}
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={25}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numAllowed}
                id="numberInput"
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
              />
              <label>Include Numbers</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={splCharAllowed}
                id="splCharacterInput"
                onChange={() => {
                  setSplCharAllowed((prev) => !prev);
                }}
              />
              <label>Include Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
