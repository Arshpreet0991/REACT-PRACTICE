# Create our own Mini REACT

To understand what goes on under the hood of a react, we will create a mini react version.

- we are going to create an index.html and a cutomReact.js files
- our goal is to create an element by using a function. Then render that element in our "root" div inside the index.html.

### index.html

- Here we will add a div with id named "root" and a script tag which will link the index file to customReact.js

  ```js
  <body>
    <div id="root"></div>
    <script src="./customReact.js"></script>
  </body>
  ```

### customReact.js

- Here we will create an object called reactElement.
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

- Then, we create a function which will create and render the above object

  ```js
  // function to render the element
  function customRender(reactElement, container) {
    // create the element
    const domElement = document.createElement(reactElement.type);

    // add the text/content of the link
    domElement.innerHTML = reactElement.children;

    // set attribute of the element
    domElement.setAttribute("href", reactElement.props.type);
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
