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

  const firstNumber = createInputComponent("first number");
  const secondNumber = createInputComponent("second number");
  appElement.append(firstNumber, secondNumber);

  const wrapperElement = createElement("div", {
    className: "wrapper",
  });

  appElement.append(wrapperElement);

  const calcSum = createButtonComponent("+", function () {
    const result = Number(firstNumber.value) + Number(secondNumber.value);
    resultComponent.textContent = `Result: ${result}`;
  });
  const calcDiff = createButtonComponent("-", function () {
    alert(Number(firstNumber.value) - Number(secondNumber.value));
  });
  const calcMultiply = createButtonComponent("*", function () {
    alert(Number(firstNumber.value) * Number(secondNumber.value));
  });
  const calcQuotient = createButtonComponent("/", function () {
    alert(Number(firstNumber.value) / Number(secondNumber.value));
  });

  wrapperElement.append(calcSum, calcDiff, calcMultiply, calcQuotient);

  const resultComponent = createResultComponent();
  appElement.append(resultComponent);
}

createApp();
