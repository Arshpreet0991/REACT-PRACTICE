# 2

# Create our own Mini REACT

To understand what goes on under the hood of a react, we will create a mini react version.

- we are going to create an index.html and a cutomReact.js files
- our goal is to create an element by using a function. Then inject that element into our container. That container would be our "root" div inside the index.html.

### index.html

- Here we will add a div with id named "root" and a script tag which will link the index file to customReact.js

  ```js
  <body>
    <div id="root"></div>
    <script src="./customReact.js"></script>
  </body>
  ```

### customReact.js

- Now we will create an object named reactElement. This object will be passed to a method "customRender". This method will create the html elements using our object and injected the html in our root div container.
- This object expects some data like type, props and children.
  - Type: is the type of tag that we want to use
  - props: these are the properties of the tag
  - children: it is the text of the tag
- this object will be used to create and render the html element.
- we are using "a" tag for this.

  ```js
  const reactElement = {
    type: "a",
    props: {
      href: "https://www.google.com",
      target: "_blank",
    },
    children: "Click on me to google",
  };
  ```

- Then, we create a function which will create and render the above object.
- **Imporant**: our method custom render expects the object

  ```js
  // function to render the element
  function customRender(reactElement, container) {
    // create the element
    const domElement = document.createElement(reactElement.type);

    // add the text/content of the link
    domElement.innerHTML = reactElement.children;

    // set attribute of the element
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);

    // add the stuff inside element
    container.appendChild(domElement);
  }

  // select the root element inside the index.html
  const mainContainer = document.getElementById("root");

  // call the function which takes react element
  // and renders it inside the main container (root)
  customRender(reacElement, mainContainer);
  ```

##### IMPORTANT

- The above codes breaks if a user adds more props while creating the element.
- So a better way would be to let the user give as many props inside their element, and we loop through them.

- Modified Code:

  ```js
  // function to render the element
  function customRender(reactElement, container) {
    // create the element
    const domElement = document.createElement(reactElement.type);

    // add the text/content of the link
    domElement.innerHTML = reactElement.children;

    // loop over the keys(props) entered by the user
    // match it with the props inside the react Element
    // render the matching pairs of key and props
    for (const key in reactElement.props) {
      domElement.setAttribute(key, reactElement.props[key]);
    }

    // add the stuff inside element
    container.appendChild(domElement);
  }

  // select the root element inside the index.html
  const mainContainer = document.getElementById("root");

  // call the function which takes react element
  // and renders it inside the main container (root)
  customRender(reacElement, mainContainer);
  ```

#### Important

- In actual react app, the object is not like the one we created. It has different keys. For example:
  ```js
  const reactElement = React.createElement(
    "a",
    { href: "https://www.google.com", target: "_blank" },
    "click to visit google",
    evaluatedExpressions
  );
  ```
  - The react object which creates HTML elements expects tag name, attributes, text

### jsx concept

jsx is javascript and with html. Here x refers to html.

- Now we know, there is function like App() which is passed to react. This function takes in an object which is converted into HTML and is then rendered.
- since it is jsx, we can also use variables inside these function. For example:
  ```js
  function App() {
    const username = "Arshpreet";
    return <h1>Hello {username}</h1>;
  }
  ```
- the variables are inserted by using curly braces { }.
- **IMPORTANT**: The variable entered here is called **Evaluated Expression**. Which means, this variable can only hold the final outcome of a logic/code.
- The logic has to be before the return statement, in the return statement we can only have evaluated expressions.
- **_WHY?_**: Because, App() function returns an object. And in JS we know, objects are key value pairs, we dont put logic inside the object.
- Then that object is converted into HTML and rendered in react.
- Now, this App() function will pass an object on to react to render.

  ```js
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  ```
