import { machine, state, baseOperations, numbers, operators } from "./constants";
import { Keys, Machine } from "./enums";
import { calculateResult, invertNumberSign, performBaseOperations } from "./utils";

import { KeysType } from "./interfaces";

export const transition = (currentState: keyof typeof Machine, key: KeysType): void => {
	const nextState = machine.states[currentState].on[key] || currentState;

	state.previousMachineState = state.machineState;
	state.machineState = nextState;
	state.previousPressedKey = state.pressedKey;
	state.pressedKey = key;
};

export const interpretMachine = (): void => {
	if (baseOperations.includes(state.pressedKey)) {
		performBaseOperations();

		return;
	}

	switch (state.machineState) {
		case Machine.START: {
			if (numbers.includes(+state.pressedKey)) {
				state.inputResult += state.pressedKey;
				break;
			} else {
				break;
			}
		}

		case Machine.ARG_INT: {
			if (numbers.includes(+state.pressedKey)) {
				if (
					state.pressedKey === Keys.ZERO &&
					state.previousPressedKey === Keys.ZERO &&
					state.inputResult.length <= 1
				) {
					break;
				}

				if (state.inputResult.startsWith(Keys.ZERO)) {
					state.inputResult = state.inputResult.replace(Keys.ZERO, "") + state.pressedKey;
					break;
				}

				state.inputResult += state.pressedKey;
				break;
			}

			if (state.previousMachineState === Machine.CALCULATE_RESULT) {
				state.inputFormula = "";
				state.inputResult = state.pressedKey;
				break;
			}

			if (state.pressedKey === Keys.PLUS_MINUS && state.inputResult.length >= 1) {
				state.inputResult = invertNumberSign(state.inputResult);
				break;
			}
		}

		case Machine.ARG_FLOAT: {
			if (state.inputResult.includes(Keys.DOT) && state.pressedKey === Keys.DOT) {
				state.inputResult = state.inputResult;
				break;
			}

			if (state.pressedKey === Keys.DOT) {
				if (state.inputResult.length < 1) {
					state.inputResult = "0.";
					break;
				}

				state.inputResult += Keys.DOT;
				break;
			}

			if (state.pressedKey === Keys.PLUS_MINUS && state.inputResult.length >= 1) {
				state.inputResult = invertNumberSign(state.inputResult);
				break;
			}

			if (numbers.includes(+state.pressedKey)) {
				state.inputResult += state.pressedKey;
				break;
			}
		}

		case Machine.OPERATOR: {
			if (state.pressedKey === state.previousPressedKey) {
				break;
			}

			if (
				operators.includes(state.pressedKey) &&
				operators.includes(state.previousPressedKey)
			) {
				state.inputFormula = state.inputFormula.slice(0, -1) + state.pressedKey;
				break;
			}

			if (operators.includes(state.pressedKey)) {
				state.inputFormula += state.inputResult + state.pressedKey;
				state.inputResult = "";
				break;
			}

			if (state.pressedKey === Keys.SQUARE_ROOT) {
				const result = Math.sqrt(Number(state.inputResult));

				state.inputFormula += `${result}`;
				state.inputResult = "";
				break;
			}

			if (state.pressedKey === Keys.SQUARE) {
				const result = Math.pow(Number(state.inputResult), 2);

				state.inputFormula += `${result}`;
				state.inputResult = "";
				break;
			}
		}

		case Machine.PARENTHESES: {
			if (state.previousMachineState === Machine.START) {
				state.inputFormula += Keys.PARENTHESES_LEFT;
				break;
			}

			if (state.pressedKey === Keys.PARENTHESES_RIGHT) {
				state.inputFormula += state.inputResult + state.pressedKey;
				state.inputResult = "";
				break;
			}

			state.inputFormula += state.pressedKey;
		}

		case Machine.CALCULATE_RESULT: {
			if (operators.some(el => state.inputFormula.includes(el))) {
				if ([...operators, Keys.EQUALS].includes(state.pressedKey)) {
					const result = `${calculateResult(state.inputFormula + state.inputResult)}`;

					state.inputFormula += state.inputResult + Keys.EQUALS;
					state.inputResult = result;
					break;
				}
			}

			if (numbers.includes(+state.pressedKey)) {
				state.inputResult = state.pressedKey;
				break;
			}
		}

		case Machine.CONTINUE_CALCULATION: {
			state.inputFormula = state.inputResult + state.pressedKey;
			state.inputResult = "";
			state.machineState = Machine.OPERATOR;

			break;
		}
	}
};
