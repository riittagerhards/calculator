import { createTitleComponent } from "./lib/createTitleComponent.js";
import { createInstructionComponent } from "./lib/createInstructionComponent.js";
import { createInputComponent } from "./lib/createInputComponent.js";
import { createButtonComponent } from "./lib/createButtonComponent.js";
import { createElement } from "./lib/elements.js";

function createApp() {
  const appElement = document.querySelector("#app");

  const titleComponent = createTitleComponent();
  const instructionComponent = createInstructionComponent();

  appElement.append(titleComponent);
  appElement.append(instructionComponent);

  const firstNumber = createInputComponent("");
  const secondNumber = createInputComponent("");
  appElement.append(firstNumber, secondNumber);

  const wrapperElement = createElement("div", {
    className: "wrapper",
  });

  appElement.append(wrapperElement);

  const calcSum = createButtonComponent("+", function () {
    alert(Number(firstNumber.value) + Number(secondNumber.value));
  });
  const calcDiff = createButtonComponent("-", function () {
    alert(Number(firstNumber.value) - Number(secondNumber.value));
  });

  wrapperElement.append(calcSum, calcDiff);
}

createApp();
