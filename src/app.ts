import { state } from "./constants";
import { drawResult, drawTop, interpretMachine, transition } from "./utils";

import "./styles.scss";

const buttons = <HTMLElement>document.querySelector(".buttons");

buttons.addEventListener("click", event => {
	const target = <HTMLInputElement>event.target;

  transition(state.machineState, target.innerText);
  interpretMachine();

	drawTop();
	drawResult();
	console.log(state);
});
