import { createElement } from "./elements.js";

function createInputComponent() {
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

  const inputWrapper = createElement(
    "div",
    {
      className: "inputWrapper",
    },
    [inputElement1, inputElement2]
  );
  return inputWrapper;
}
/*
    export function createButtonComponent() {
  const buttonPlus = createElement("button", {
    type: "oncklick",
    className: "button",
    textContent: "+",
  });
  return buttonPlus;
}
function calculator(myCalculation, firstNumber, secondNumber) {
  return myCalculation(firstNumber, secondNumber);
}

function add(inputElement1, inputElement2) {
  return inputElement1.value + inputElement2.value;
}

const formElement = createElement(
  "form",
  {
    className: "form",
  },
  [buttonPlus]
);
*/
