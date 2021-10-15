import { createElement } from "./elements.js";
import { createInputComponent } from "./createInputComponent.js";

export function createButtonComponent(type, onClick) {
  const button = createElement("button", {
    className: "button",
    textContent: type,
    onclick: onClick,
  });

  return button;
}
