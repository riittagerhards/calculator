import { createElement } from "./elements.js";

export function createInputComponent() {
  const inputElement1 = createElement("input", {
    type: "number",
    className: "input",
    placeholder: "First Number",
  });

  const inputElement2 = createElement("input", {
    type: "number",
    className: "input",
    placeholder: "Second Number",
  });

  const formElement = createElement(
    "div",
    {
      className: "",
    },
    [inputElement1, inputElement2]
  );
  return formElement;
}
