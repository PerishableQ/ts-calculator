import { Machine, Keys } from "./enums";

import { IMachine, IState } from "./interfaces";

export const machine: IMachine = {
	initial: Machine.START,
	states: {
		[Machine.START]: {
			on: {
				[Keys.DOT]: Machine.ARG_FLOAT,
				[Keys.ZERO]: Machine.ARG_INT,
				[Keys.ONE]: Machine.ARG_INT,
				[Keys.TWO]: Machine.ARG_INT,
				[Keys.THREE]: Machine.ARG_INT,
				[Keys.FOUR]: Machine.ARG_INT,
				[Keys.FIVE]: Machine.ARG_INT,
				[Keys.SIX]: Machine.ARG_INT,
				[Keys.SEVEN]: Machine.ARG_INT,
				[Keys.EIGHT]: Machine.ARG_INT,
				[Keys.NINE]: Machine.ARG_INT,
				[Keys.PARENTHESES_LEFT]: Machine.PARENTHESES,
				[Keys.CLEAR]: Machine.START
			}
		},
		[Machine.ARG_INT]: {
			on: {
				[Keys.ZERO]: Machine.ARG_INT,
				[Keys.ONE]: Machine.ARG_INT,
				[Keys.TWO]: Machine.ARG_INT,
				[Keys.THREE]: Machine.ARG_INT,
				[Keys.FOUR]: Machine.ARG_INT,
				[Keys.FIVE]: Machine.ARG_INT,
				[Keys.SIX]: Machine.ARG_INT,
				[Keys.SEVEN]: Machine.ARG_INT,
				[Keys.EIGHT]: Machine.ARG_INT,
				[Keys.NINE]: Machine.ARG_INT,
				[Keys.EQUALS]: Machine.CALCULATE_RESULT,
				[Keys.DOT]: Machine.ARG_FLOAT,
				[Keys.MULTIPLY]: Machine.OPERATOR,
				[Keys.DIVIDE]: Machine.OPERATOR,
				[Keys.PLUS]: Machine.OPERATOR,
				[Keys.MINUS]: Machine.OPERATOR,
				[Keys.PLUS_MINUS]: Machine.ARG_INT,
				[Keys.PARENTHESES_RIGHT]: Machine.PARENTHESES,
				[Keys.SQUARE_ROOT]: Machine.OPERATOR,
				[Keys.SQUARE]: Machine.OPERATOR,
				[Keys.CLEAR]: Machine.START
			}
		},
		[Machine.ARG_FLOAT]: {
			on: {
				[Keys.DOT]: Machine.ARG_FLOAT,
				[Keys.MULTIPLY]: Machine.OPERATOR,
				[Keys.DIVIDE]: Machine.OPERATOR,
				[Keys.PLUS]: Machine.OPERATOR,
				[Keys.MINUS]: Machine.OPERATOR,
				[Keys.PLUS_MINUS]: Machine.ARG_INT,
				[Keys.ZERO]: Machine.ARG_FLOAT,
				[Keys.ONE]: Machine.ARG_FLOAT,
				[Keys.TWO]: Machine.ARG_FLOAT,
				[Keys.THREE]: Machine.ARG_FLOAT,
				[Keys.FOUR]: Machine.ARG_FLOAT,
				[Keys.FIVE]: Machine.ARG_FLOAT,
				[Keys.SIX]: Machine.ARG_FLOAT,
				[Keys.SEVEN]: Machine.ARG_FLOAT,
				[Keys.EIGHT]: Machine.ARG_FLOAT,
				[Keys.NINE]: Machine.ARG_FLOAT,
				[Keys.EQUALS]: Machine.CALCULATE_RESULT,
				[Keys.PARENTHESES_RIGHT]: Machine.PARENTHESES,
				[Keys.SQUARE_ROOT]: Machine.OPERATOR,
				[Keys.SQUARE]: Machine.OPERATOR,
				[Keys.CLEAR]: Machine.START
			}
		},
		[Machine.OPERATOR]: {
			on: {
				[Keys.DOT]: Machine.ARG_FLOAT,
				[Keys.ZERO]: Machine.ARG_INT,
				[Keys.ONE]: Machine.ARG_INT,
				[Keys.TWO]: Machine.ARG_INT,
				[Keys.THREE]: Machine.ARG_INT,
				[Keys.FOUR]: Machine.ARG_INT,
				[Keys.FIVE]: Machine.ARG_INT,
				[Keys.SIX]: Machine.ARG_INT,
				[Keys.SEVEN]: Machine.ARG_INT,
				[Keys.EIGHT]: Machine.ARG_INT,
				[Keys.NINE]: Machine.ARG_INT,
				[Keys.PARENTHESES_LEFT]: Machine.PARENTHESES,
				[Keys.CLEAR]: Machine.START
			}
		},
		[Machine.PARENTHESES]: {
			on: {
				[Keys.ZERO]: Machine.ARG_INT,
				[Keys.ONE]: Machine.ARG_INT,
				[Keys.TWO]: Machine.ARG_INT,
				[Keys.THREE]: Machine.ARG_INT,
				[Keys.FOUR]: Machine.ARG_INT,
				[Keys.FIVE]: Machine.ARG_INT,
				[Keys.SIX]: Machine.ARG_INT,
				[Keys.SEVEN]: Machine.ARG_INT,
				[Keys.EIGHT]: Machine.ARG_INT,
				[Keys.NINE]: Machine.ARG_INT,
				[Keys.EQUALS]: Machine.CALCULATE_RESULT,
				[Keys.CLEAR]: Machine.START
			}
		},
		[Machine.CALCULATE_RESULT]: {
			on: {
				[Keys.MULTIPLY]: Machine.CONTINUE_CALCULATION,
				[Keys.DIVIDE]: Machine.CONTINUE_CALCULATION,
				[Keys.PLUS]: Machine.CONTINUE_CALCULATION,
				[Keys.MINUS]: Machine.CONTINUE_CALCULATION,
				[Keys.PLUS_MINUS]: Machine.ARG_INT,
				[Keys.DOT]: Machine.ARG_FLOAT,
				[Keys.ZERO]: Machine.ARG_INT,
				[Keys.ONE]: Machine.ARG_INT,
				[Keys.TWO]: Machine.ARG_INT,
				[Keys.THREE]: Machine.ARG_INT,
				[Keys.FOUR]: Machine.ARG_INT,
				[Keys.FIVE]: Machine.ARG_INT,
				[Keys.SIX]: Machine.ARG_INT,
				[Keys.SEVEN]: Machine.ARG_INT,
				[Keys.EIGHT]: Machine.ARG_INT,
				[Keys.NINE]: Machine.ARG_INT,
				[Keys.CLEAR]: Machine.START
			}
		},
		[Machine.CONTINUE_CALCULATION]: {
			on: {
				[Keys.MULTIPLY]: Machine.OPERATOR,
				[Keys.DIVIDE]: Machine.OPERATOR,
				[Keys.PLUS]: Machine.OPERATOR,
				[Keys.MINUS]: Machine.OPERATOR,
				[Keys.CLEAR]: Machine.START
			}
		}
	}
};

export const state: IState = {
	machineState: machine.initial,
	previousMachineState: null,
	inputFormula: "",
	inputResult: "",
	pressedKey: "C",
	previousPressedKey: "C"
};

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const operators = ["+", "-", "*", "/"];
export const baseOperations = ["C", "CE", "Delete"];

export const buttons = <HTMLElement>document.querySelector(".buttons"),
	inputFormula = <HTMLElement>document.querySelector(".input-formula"),
	inputResult = <HTMLElement>document.querySelector(".input-result");
