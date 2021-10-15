import { createElement } from "./elements.js";

export function createInstructionComponent() {
  const instructionElement = createElement("p", {
    textContent: "Type numbers in the text fields below",
    className: "instruction",
  });
  return instructionElement;
}
