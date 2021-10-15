import { createTitleComponent } from "./lib/createTitleComponent.js";
import { createInstructionComponent } from "./lib/createInstructionComponent.js";
import { createInputComponent } from "./lib/createInputComponent.js";

function createApp() {
  const appElement = document.querySelector("#app");
  const titleComponent = createTitleComponent();
  const instructionComponent = createInstructionComponent();
  const inputComponent = createInputComponent();

  appElement.append(titleComponent);
  appElement.append(instructionComponent);
  appElement.append(inputComponent);
}

createApp();
