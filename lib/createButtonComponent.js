import { createElement } from "./elements.js";

export function createButtonComponent(type, onClick) {
  const button = createElement("button", {
    className: "button",
    textContent: type,
    onclick: onClick,
  });

  return button;
}
