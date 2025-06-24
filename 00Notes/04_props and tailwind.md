# Props and Tailwind in react

## installing tailwind in Vite

- create a new project
- in terminal:
  - npm create vite@latest
  - follow the instructions on terminal
  - npm install -D tailwindcss@3 postcss autoprefixer
  - npx tailwindcss init -p
- go to tailwind.config.js and replace the content array with the following
  ```js
     content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  ```
- Go to index.css file in src folder and write the following on top of the page.
  ```js
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  ```
- npm run dev

## PROPS

- props in react let us create a component and reuse it anywhere we want.
- Suppose we create a card template, then instead of creating this template again and again, we simply store it in an object and use it anywhere we want.

#### Creating a prop

- **_imp_** props is an object.
- we make a new folders named components inside the src folder
- Insede, we create a file named Card.jsx
- props is nothing but a function which will return us an object. This object will be rendered in app.jsx
- we pass the parameter props inside the function. This is how we use props. It is a keyword in react. We have to pass props inside the function.

- Here is the code for a card that is used for props.
- the code has creates a card with image, heading, text and a button.
- we will be using this card template to reuse the cards.

```jsx
import React from "react";

function Card(props) {
  return (
    <div>
      <img src="https://image source 1" />

      <h2>Heading</h2>

      <p>some description about the image</p>

      <button> Read more </button>
    </div>
  );
}

export { Card };
```

#### Passing values from one component to another using Props

- to pass a value to props, we will pass our values from app.jsx

```js
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card title="CN Tower" />
    </>
  );
}

export default App;
```

- Since props is an object, inside our Card.jsc we will get access to the a field called **_props.title_**
- we can also pass another object inside the props. For this, we have to use it like a variable, i.e in inside { }. For example

```js
function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "Arsh",
    age: 34,
  };

  return (
    <>
      <Card title="CN Tower" newObj={myObj} /> // passing object in props.
    </>
  );
}

export default App;
```

### Modified code for Card to make it more generalize

- we want to change the image and the title for every new card.
- Notice that we passed the values from app.jsx and handle those parameters inside the Card.jsx
- App.jsx looks like this now:

  ```jsx
  function App() {
    const [count, setCount] = useState(0);

    return (
      <>
        // passing the src and the title arguments here // card 1
        <Card src="Image source 1" title="CN Tower" />
        // card 2
        <Card src="Image source 2" title="Pizza" />
        // card 3
        <Card src="Image source 3" title="Burj Khalifa" />
      </>
    );
  }

  export default App;
  ```

#### Card.jsx

- in card function, we will use props.src and props.title to get access to the object properties that were added from app function.

```jsx
function Card(props) {
  return (
    <div>
      <img src={props.src} />

      <h2>{props.title}</h2>

      <p>some description about the image</p>

      <button> Read more </button>
    </div>
  );
}
```

**We simply need to change are arguments to get different cards.**

- Usually we can use destructuring of object, which makes the code more readable and preffered way of writing the code.
- So instead of writing props.src and props.title, we can do something like this:
- we can also give default values to our props so that if someone forgets to pass an argument, we can show something.
  - default values are added like this:
  - function Card({ src, title="No title" })

```jsx
function Card({ src, title="No title" }) {
  return (
    <div>
      <img src={src} />
    </div>
     <div>
      <h2>{title}</h2>
    </div>
  );
}
```
