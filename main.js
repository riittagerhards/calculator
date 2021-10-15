import { createTitleComponent } from "./lib/createTitleComponent.js";
import { createInstructionComponent } from "./lib/createInstructionComponent.js";

function createApp() {
  const appElement = document.querySelector("#app");
  const titleComponent = createTitleComponent();
  const instructionComponent = createInstructionComponent();

  appElement.append(titleComponent);
  appElement.append(instructionComponent);
}

createApp();
