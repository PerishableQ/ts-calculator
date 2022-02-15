import { IMachine, IState } from "./interfaces";

export const machine: IMachine = {
	initial: "start",
	states: {
		start: {
			on: {
				"(": "parenthesis",
				".": "argFloat",
				"0": "argInt",
				"1": "argInt",
				"2": "argInt",
				"3": "argInt",
				"4": "argInt",
				"5": "argInt",
				"6": "argInt",
				"7": "argInt",
				"8": "argInt",
				"9": "argInt",
				C: "start"
			}
		},
		argInt: {
			on: {
				".": "argFloat",
				"*": "operator",
				"/": "operator",
				"+": "operator",
				"-": "operator",
				"+/-": "argInt",
				"0": "argInt",
				"1": "argInt",
				"2": "argInt",
				"3": "argInt",
				"4": "argInt",
				"5": "argInt",
				"6": "argInt",
				"7": "argInt",
				"8": "argInt",
				"9": "argInt",
				"=": "calculateResult",
				")": "parenthesis",
				C: "start",
				"√": "operator",
				"x²": "operator"
			}
		},
		argFloat: {
			on: {
				".": "argFloat",
				"*": "operator",
				"/": "operator",
				"+": "operator",
				"-": "operator",
				"+/-": "argInt",
				"0": "argFloat",
				"1": "argFloat",
				"2": "argFloat",
				"3": "argFloat",
				"4": "argFloat",
				"5": "argFloat",
				"6": "argFloat",
				"7": "argFloat",
				"8": "argFloat",
				"9": "argFloat",
				"=": "calculateResult",
				")": "parenthesis",
				C: "start",
				"√": "operator",
				"x²": "operator"
			}
		},
		operator: {
			on: {
				".": "argFloat",
				"0": "argInt",
				"1": "argInt",
				"2": "argInt",
				"3": "argInt",
				"4": "argInt",
				"5": "argInt",
				"6": "argInt",
				"7": "argInt",
				"8": "argInt",
				"9": "argInt",
				"(": "parenthesis",
				C: "start"
			}
		},
		parenthesis: {
			on: {
				"0": "argInt",
				"1": "argInt",
				"2": "argInt",
				"3": "argInt",
				"4": "argInt",
				"5": "argInt",
				"6": "argInt",
				"7": "argInt",
				"8": "argInt",
				"9": "argInt",
				"=": "calculateResult",
				C: "start"
			}
		},
		calculateResult: {
			on: {
				"*": "continueCalculation",
				"/": "continueCalculation",
				"+": "continueCalculation",
				"-": "continueCalculation",
				"+/-": "argInt",
				".": "argFloat",
				"0": "argInt",
				"1": "argInt",
				"2": "argInt",
				"3": "argInt",
				"4": "argInt",
				"5": "argInt",
				"6": "argInt",
				"7": "argInt",
				"8": "argInt",
				"9": "argInt",
				C: "start"
			}
		},
		continueCalculation: {
			on: {
				"*": "operator",
				"/": "operator",
				"+": "operator",
				"-": "operator",
				C: "start"
			}
		}
	}
};

export const state: IState = {
	machineState: machine.initial,
	previousMachineState: "",
	inputTop: "",
	inputResult: "",
	pressedKey: "",
	previousPressedKey: ""
};

export const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const operators: string[] = ["+", "-", "*", "/"];
export const baseOperations = ["C", "CE", "Delete"];
