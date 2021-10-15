import { createElement } from "./elements.js";

export function createInputComponent(placeholder) {
  const inputNumber = createElement("input", {
    type: "number",
    className: "input-field",
    placeholder: placeholder,
  });

  return inputNumber;
}
