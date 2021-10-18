import { createElement } from "./elements.js";

export function createResultComponent() {
  const resultElement = createElement("h3", {
    textContent: `Result: `,
    className: "result",
  });
  return resultElement;
}
