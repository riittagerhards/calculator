import { createElement } from "./elements.js";

export function createInputComponent(props) {
  const inputNumber = createElement("input", {
    type: "number",
    className: "input-field",
    placeholder: props.placeholder,
  });

  return inputNumber;
}
