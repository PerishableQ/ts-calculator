import { machine, state, baseOperations, numbers, operators } from "./constants";
const inputResult = <HTMLElement>document.querySelector(".input-result");
const inputTop = <HTMLElement>document.querySelector(".input-top");

export const calculateResult = (eq: string, callback?: Function) => {
	const mulDiv = /([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*([*/])\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)/;
	const plusMin = /([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*([+-])\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)/;
	const parentheses = /(\d)?\s*\(([^()]*)\)\s*/;
	var current;
	while (eq.search(/^\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*$/) === -1) {
		eq = fParentheses(eq);
		if (eq === current)
			return handleCallback(new SyntaxError("The equation is invalid."), null);
		current = eq;
	}
	return handleCallback(null, +eq);

	function fParentheses(eq: string) {
		while (eq.search(parentheses) !== -1) {
			eq = eq.replace(parentheses, (a, b, c) => {
				c = fMulDiv(c);
				c = fPlusMin(c);
				return typeof b === "string" ? b + "*" + c : c;
			});
		}
		eq = fMulDiv(eq);
		eq = fPlusMin(eq);
		return eq;
	}

	function fMulDiv(eq: any) {
		while (eq.search(mulDiv) !== -1) {
			eq = eq.replace(mulDiv, (a: any) => {
				const sides = mulDiv.exec(a) as RegExpExecArray;
				const result = sides[2] === "*" ? +sides[1] * +sides[3] : +sides[1] / +sides[3];
				return result >= 0 ? "+" + result : result;
			});
		}
		return eq;
	}

	function fPlusMin(eq: string): string {
		eq = eq.replace(/([+-])([+-])(\d|\.)/g, function (a, b, c, d) {
			return (b === c ? "+" : "-") + d;
		});
		while (eq.search(plusMin) !== -1) {
			eq = eq.replace(plusMin, a => {
				const sides = plusMin.exec(a) as RegExpExecArray;
				return sides![2] === "+"
					? `${+sides[1] + +sides[3]}`
					: `${+sides![1] - +sides![3]}`;
			});
		}
		return eq;
	}

	function handleCallback(errObject: Error | null, result: number | null) {
		if (typeof callback !== "function") {
			if (errObject !== null) throw errObject;
		} else {
			callback(errObject, result);
		}
		return result;
	}
};

export const drawResult = (): void => {
	inputResult.innerText = state.inputResult;
};

export const drawTop = (): void => {
	inputTop.innerText = state.inputTop;
};

export const transition = (currentState: string, event: string): void => {
	const nextState = machine.states[currentState].on?.[event] || currentState;

	state.previousMachineState = state.machineState;
	state.machineState = nextState;

	state.previousPressedKey = state.pressedKey;
	state.pressedKey = event;
};

export const interpretMachine = (): void => {
	if (baseOperations.includes(state.pressedKey)) {
		performBaseOperations();
	}

	switch (state.machineState) {
		case "start": {
			if (numbers.includes(+state.pressedKey)) {
				state.inputResult += state.pressedKey;
				break;
			}

			break;
		}

		case "argInt": {
			if (numbers.includes(+state.pressedKey)) {
				if (
					state.pressedKey === "0" &&
					state.previousPressedKey === "0" &&
					state.inputResult.length <= 1
				) {
					break;
				}

				if (state.inputResult.startsWith("0")) {
					state.inputResult = state.inputResult.replace("0", "") + state.pressedKey;
					break;
				}

				state.inputResult += state.pressedKey;

				break;
			}

			if (state.previousMachineState === "calculateResult") {
				state.inputTop = "";
				state.inputResult = state.pressedKey;
				break;
			}

			if (state.pressedKey === "+/-" && state.inputResult.length >= 1) {
				state.inputResult = invertNumberSign(state.inputResult);
				break;
			}

			break;
		}

		case "argFloat": {
			if (state.inputResult.includes(".") && state.pressedKey === ".") {
				state.inputResult = state.inputResult;
				break;
			}

			if (state.pressedKey === "." && state.inputResult.length < 1) {
				state.inputResult = "0.";
				break;
			}

			if (state.pressedKey === ".") {
				state.inputResult += ".";
				break;
			}

			if (state.pressedKey === "+/-" && state.inputResult.length >= 1) {
				state.inputResult = invertNumberSign(state.inputResult);
				break;
			}

			if (numbers.includes(+state.pressedKey)) {
				state.inputResult += state.pressedKey;
				break;
			}

			break;
		}

		case "operator": {
			if (state.pressedKey === state.previousPressedKey) {
				break;
			}

			if (
				operators.includes(state.pressedKey) &&
				operators.includes(state.previousPressedKey)
			) {
				state.inputTop = state.inputTop.slice(0, -1) + state.pressedKey;
				break;
			}

			if (operators.includes(state.pressedKey)) {
				state.inputTop += state.inputResult + state.pressedKey;
				state.inputResult = "";
				break;
			}

			if (state.pressedKey === "√") {
				const result = Math.sqrt(Number(state.inputResult));

				state.inputTop += `${result}`;
				state.inputResult = "";
				break;
			}

			if (state.pressedKey === "x²") {
				const result = Math.pow(Number(state.inputResult), 2);

				state.inputTop += `${result}`;
				state.inputResult = "";
				break;
			}

			break;
		}

		case "parenthesis": {
			if (state.previousMachineState === "start") {
				state.inputTop += "(";
				break;
			}

			if (state.pressedKey === ")") {
				state.inputTop += state.inputResult + state.pressedKey;
				state.inputResult = "";
				break;
			}

			state.inputTop += state.pressedKey;
			break;
		}

		case "calculateResult": {
			if (operators.some(el => state.inputTop.includes(el))) {
				if ([...operators, "="].includes(state.pressedKey)) {
					const result = `${calculateResult(state.inputTop + state.inputResult)}`;

					state.inputTop += state.inputResult + "=";
					state.inputResult = result;
					break;
				}
			}

			if (numbers.includes(+state.pressedKey)) {
				state.inputResult = state.pressedKey;
				break;
			}

			break;
		}

		case "continueCalculation": {
			state.inputTop = state.inputResult + state.pressedKey;
			state.inputResult = "";
			state.machineState = "operator";
			break;
		}
	}
};

const invertNumberSign = (num: string) => {
	const number = Number(num);

	return number >= 0 ? `${-Math.abs(number)}` : `${Math.abs(number)}`;
};

const performBaseOperations = () => {
	if (state.pressedKey === "C") {
		state.inputTop = "";
		state.inputResult = "";
		return;
	}

	if (state.pressedKey === "CE") {
		state.inputResult = "";
		return;
	}

	if (state.pressedKey === "Delete") {
		state.inputResult = state.inputResult.slice(0, -1);
		return;
	}
};
