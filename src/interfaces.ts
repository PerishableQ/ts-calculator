import { Keys, Machine } from "./enums";

export interface IState {
	machineState: keyof typeof Machine;
	previousMachineState: keyof typeof Machine | null;
	inputFormula: string;
	inputResult: string;
	pressedKey: KeysType;
	previousPressedKey: KeysType;
}

export interface IMachine {
	initial: Machine.START;
	states: {
		[key in Machine]: any;
	};
}

export type KeysType = `${Keys}`;
