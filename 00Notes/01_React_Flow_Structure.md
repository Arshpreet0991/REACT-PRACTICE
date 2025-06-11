# 🛠️ Installing React

#### Using Create React App (CRA)

in terminal

```js
npx create-react-app app_name
```

- The app name must be in lowercase, e.g., reactbasics01.
- Create React App (CRA) is a comprehensive setup tool that includes Webpack, Babel, and many development tools. It’s useful for beginners but can be heavy for small projects.

#### Using Vite (Lightweight Alternative)

In terminal

```js
    npm create vite@latest
    npm install
```

- Enter project name, select REACT and Javascript from the options.
- Unlike CRA, Vite doesn’t automatically install dependencies. So you must run npm install after setup.
- This option does not install node modules and packages. So, for that we will write **_npm install_** in terminal.
- Vite offers faster builds and hot reloading, making it ideal for modern development.

# 🔄 React App Flow & Structure

## index.js or (main.jsx in vite)

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- ReactDOM enables rendering React in web browsers.

  - For mobile apps, React Native is used instead.

- createRoot initializes a root DOM node where the React app will render. createRoot(...) finds the HTML element with id "root" and prepares it for rendering.
- root.render(...) puts your app < App /> into that root element.

- < App /> is the root component that gets rendered.
- React.StrictMode is a wrapper that helps identify potential issues in development.

  ## App.js

- This App.js is called REACT COMPONENT

```js
import Demo from "./Demo";

function App() {
  return (
    <>
      <h1>This is App function</h1>
    </>
  );
}

export default App;
```

- this function is called inside root.render function.
- whatever it is in this function, it is rendered.
- We can add our own function and call it inside the App function.
- **_IMP_** These functions are called **_REACT COMPONENTS_**

## Creating our Own REACT COMPONENT

- RULES:

  - first letter of the file name should be Capital.
  - first letter of the component name has to be capital
  - file extension has to be **.jsx**

  ```js
  function Demo() {
    return <h1>This is inside Demo function</h1>;
  }
  export default Demo;
  ```

- This demo component can be called in our app.js
- **Important**- inside the component/function return statement, we can only return one tag.
- so, to send multiple tags, we can create a div and send multiple tags inside it.
- For, convinience we dont need to write the div syntax. We can simply write <> and </>. These are called **_FRAGMENTS_**.

```js
import Demo from "./Demo";

function App() {
  return (
    <>
      <h1>This is App function</h1>
      <Demo /> // calling the Demo component inside the App component
    </> // use of fragments to send multiple tags.
  );
}

export default App;
```
