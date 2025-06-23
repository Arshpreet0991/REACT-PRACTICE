const reactComponent = {
  type: "a",
  props: {
    href: "www.google.com",
    target: "_blank",
  },
  children: "Click for google search",
};

function renderComponent(component, container) {
  const root = document.getElementById(container);
  console.log(root);

  const reactElement = document.createElement(component.type);
  reactElement.setAttribute("href", component.props.href);
  reactElement.setAttribute("target", component.props.target);
  reactElement.innerHTML = component.children;

  root.appendChild(reactElement);
}

renderComponent(reactComponent, "root");
