import { createTitleComponent } from "./lib/createTitleComponent.js";
import { createInstructionComponent } from "./lib/createInstructionComponent.js";
import { createInputComponent } from "./lib/createInputComponent.js";
import { createButtonComponent } from "./lib/createButtonComponent.js";
import { createElement } from "./lib/elements.js";
import { createResultComponent } from "./lib/createResultComponent.js";

function createApp() {
  const appElement = document.querySelector("#app");

  const titleComponent = createTitleComponent();
  const instructionComponent = createInstructionComponent();

  appElement.append(titleComponent);
  appElement.append(instructionComponent);

  const firstNumber = createInputComponent({ placeholder: "first number" });
  const secondNumber = createInputComponent({ placeholder: "second number" });
  appElement.append(firstNumber, secondNumber);

  const wrapperElement = createElement("div", {
    className: "wrapper",
  });

  appElement.append(wrapperElement);

  const calcSum = createButtonComponent("+", function () {
    const resultSum = Number(firstNumber.value) + Number(secondNumber.value);
    resultComponent.textContent = `Result: ${resultSum}`;
  });
  const calcDiff = createButtonComponent("-", function () {
    const resultDiff = Number(firstNumber.value) - Number(secondNumber.value);
    resultComponent.textContent = `Result: ${resultDiff}`;
  });
  const calcMultiply = createButtonComponent("*", function () {
    const resultMultiply =
      Number(firstNumber.value) * Number(secondNumber.value);
    resultComponent.textContent = `Result: ${resultMultiply}`;
  });
  const calcQuotient = createButtonComponent("/", function () {
    const resultQuotient =
      Number(firstNumber.value) / Number(secondNumber.value);
    resultComponent.textContent = `Result: ${resultQuotient}`;
  });

  wrapperElement.append(calcSum, calcDiff, calcMultiply, calcQuotient);

  const resultComponent = createResultComponent();
  appElement.append(resultComponent);
}

createApp();
