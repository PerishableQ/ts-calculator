export interface IState {
	machineState: string;
	previousMachineState: string;
	inputTop: string;
	inputResult: string;
	pressedKey: string;
	previousPressedKey: string;
}

export interface IMachine {
	[key: string]: any;
}
