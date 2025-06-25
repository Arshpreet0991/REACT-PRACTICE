# Background Changer Project

### Objectives

- Create 7 colored buttons
- By clicking on any button, the background changes to the color of the corresponding button

### Approach

- Create props for buttons
- Use hook state. Each color will be a state.
- By clicking the button, the state will change

### App function

```jsx
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
          <CustomButtons title="Violet" bgc="violet" setColor={setColor} />
          <CustomButtons title="Indigo" bgc="indigo" setColor={setColor} />
          <CustomButtons title="Blue" bgc="blue" setColor={setColor} />
          <CustomButtons title="Green" bgc="green" setColor={setColor} />
          <CustomButtons title="Yellow" bgc="yellow" setColor={setColor} />
          <CustomButtons title="Red" bgc="red" setColor={setColor} />
        </div>
      </div>
    </>
  );
}

export default App;
```

#### Key Points

- We apply use State. Each color is a state.
- default useState is grey color.
- in const [color,setColor], color holds the current state and setColor method is used to change the state / setting the color.
- After creating the buttons, we want to change the state on clicking of a button.
- I created a reusable button component which i used to create several buttons.
- I passed some values like:
  - Title: button name
  - bgc: button's background color
  - setColor: setColor method to change the state.

### Custom Buttons components

```jsx
function CustomButtons({ title, bgc, textColor, setColor }) {
  return (
    <div>
      <button
        onClick={() => setColor(bgc)}
        className="rounded-md flex items-center justify-center  text-white "
        style={{ backgroundColor: bgc, color: textColor }}
      >
        {title}
      </button>
    </div>
  );
}

export { CustomButtons };
```

#### Key Points

- Our buttons are defined in a separate files.
- So we send our setColor method through props, where the state (background Color) will be changed according to the button clicked.
- bgc is passed inside setColor to match the button color.
- onClick event handler is used to execute the setColor method.

# onClick prop/event Handler

- we use onClick on the buttons to handle click events.
- onClick expects a function as an input.
- Here we can do something like this:

  ```jsx
  <button onClick={setColor}></button>
  ```

  - Set color is the method expected by onCLick.
  - but the problem here is that, we cannot pass a parameter here. Because if we pass a parameter then we have to something like this:

  ```jsx
  <button onClick={setColor("black")}></button>
  ```

  - By doing this, we execute the function as well, and the result of that function, is fed to onClick.
  - this will give an error, as onClick only wants the reference of function, not the returned value of the function.
  - to remedy this, we will pass a callback inside the onClick, and execute our setColor function inside the callback.
  - By doing this, onClick only gets a function, and our function also gets executed with parameters.

    ```jsx
    <button onClick={() => setColor("black")}></button>
    ```
