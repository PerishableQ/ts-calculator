import { Keys } from "./enums";
import { inputResult, inputFormula, state } from "./constants";

export const calculateResult = (equation: string): string => {
	const multiplyDivide = /([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*([*/])\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)/;
	const plusMinus = /([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*([+-])\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)/;
	const parentheses = /(\d)?\s*\(([^()]*)\)\s*/;

	let originalEquation = equation;
	let currentEquation;

	while (originalEquation.search(/^\s*([+-]?\d*\.?\d+(?:e[+-]\d+)?)\s*$/) === -1) {
		originalEquation = calculateParentheses(originalEquation);

		if (originalEquation === currentEquation) {
			return "Error";
		}

		currentEquation = originalEquation;
	}

	return originalEquation;

	function calculateParentheses(equation: string) {
		while (equation.search(parentheses) !== -1) {
			equation = equation.replace(parentheses, (a, b, c) => {
				c = handleMultiplicationDivision(c);
				c = handleAdditionSubtraction(c);

				return typeof b === "string" ? b + "*" + c : c;
			});
		}

		equation = handleMultiplicationDivision(equation);
		equation = handleAdditionSubtraction(equation);

		return equation;
	}

	function handleMultiplicationDivision(equation: string) {
		while (equation.search(multiplyDivide) !== -1) {
			equation = equation.replace(multiplyDivide, a => {
				const sides = multiplyDivide.exec(a);

				if (sides === null) {
					return "";
				}

				const result = sides[2] === "*" ? +sides[1] * +sides[3] : +sides[1] / +sides[3];

				return result >= 0 ? "+" + result : `${result}`;
			});
		}

		return equation;
	}

	function handleAdditionSubtraction(equation: string): string {
		equation = equation.replace(/([+-])([+-])(\d|\.)/g, (a, b, c, d) => {
			return (b === c ? "+" : "-") + d;
		});

		while (equation.search(plusMinus) !== -1) {
			equation = equation.replace(plusMinus, a => {
				const sides = plusMinus.exec(a);

				if (sides === null) {
					return "";
				}

				return sides![2] === "+"
					? `${+sides[1] + +sides[3]}`
					: `${+sides![1] - +sides![3]}`;
			});
		}

		return equation;
	}
};

export const drawResult = (): void => {
	inputResult.innerText = state.inputResult;
};

export const drawFormula = (): void => {
	inputFormula.innerText = state.inputFormula;
};

export const invertNumberSign = (num: string): string => {
	const number = Number(num);

	return `${number * -1}`;
};

export const performBaseOperations = (): void => {
	if (state.pressedKey === Keys.CLEAR) {
		state.inputFormula = "";
		state.inputResult = "";
	}

	if (state.pressedKey === Keys.CLEAR_ENTRY) {
		state.inputResult = "";
	}

	if (state.pressedKey === Keys.DELETE) {
		state.inputResult = state.inputResult.slice(0, -1);
	}
};
