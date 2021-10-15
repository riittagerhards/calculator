import { createElement } from "./elements.js";

export function createTitleComponent() {
  const titleElement = createElement("h1", {
    textContent: "Best Calculator Ever 🧮",
    className: "title",
  });
  return titleElement;
}
