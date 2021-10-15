import { createElement } from "./elements.js";

export function createTitleComponent() {
  const titleElement = createElement("h1", {
    textContent: "World best calculator",
    className: "title",
  });
  return titleElement;
}
