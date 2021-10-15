import { createElement } from "./elements.js";

export function createInstructionComponent() {
  const instructionElement = createElement("p", {
    textContent: "Fill in numbers and press the button of your choise",
    className: "instruction",
  });
  return instructionElement;
}
