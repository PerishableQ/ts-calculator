import { buttons, state } from "./constants";
import { drawFormula, drawResult } from "./utils";
import { interpretMachine, transition } from "./machine";

import { KeysType } from "./interfaces";

import "./styles.scss";

buttons.addEventListener("click", event => {
	const target = <HTMLInputElement>event.target;
	const key = <KeysType>target.innerText;

	transition(state.machineState, key);
	interpretMachine();

	drawFormula();
	drawResult();
	console.log(state);
});
