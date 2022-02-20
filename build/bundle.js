/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://windows-10-calculator/./src/styles.scss?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\n/* harmony import */ var _machine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./machine */ \"./src/machine.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n\r\n\r\n\r\n\r\n_constants__WEBPACK_IMPORTED_MODULE_0__.buttons.addEventListener(\"click\", event => {\r\n    const target = event.target;\r\n    const key = target.innerText;\r\n    (0,_machine__WEBPACK_IMPORTED_MODULE_1__.transition)(_constants__WEBPACK_IMPORTED_MODULE_0__.state.machineState, key);\r\n    (0,_machine__WEBPACK_IMPORTED_MODULE_1__.interpretMachine)();\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.drawFormula)();\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.drawResult)();\r\n    console.log(_constants__WEBPACK_IMPORTED_MODULE_0__.state);\r\n});\r\n\n\n//# sourceURL=webpack://windows-10-calculator/./src/app.ts?");

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"machine\": () => (/* binding */ machine),\n/* harmony export */   \"state\": () => (/* binding */ state),\n/* harmony export */   \"numbers\": () => (/* binding */ numbers),\n/* harmony export */   \"operators\": () => (/* binding */ operators),\n/* harmony export */   \"baseOperations\": () => (/* binding */ baseOperations),\n/* harmony export */   \"buttons\": () => (/* binding */ buttons),\n/* harmony export */   \"inputFormula\": () => (/* binding */ inputFormula),\n/* harmony export */   \"inputResult\": () => (/* binding */ inputResult)\n/* harmony export */ });\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ \"./src/enums.ts\");\n\r\nconst machine = {\r\n    initial: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.START,\r\n    states: {\r\n        [_enums__WEBPACK_IMPORTED_MODULE_0__.Machine.START]: {\r\n            on: {\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.DOT]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_FLOAT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.ZERO]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.ONE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.TWO]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.THREE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.FOUR]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.FIVE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.SIX]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.SEVEN]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.EIGHT]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.NINE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.PARENTHESES_LEFT]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.PARENTHESES,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.CLEAR]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.START\r\n            }\r\n        },\r\n        [_enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT]: {\r\n            on: {\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.ZERO]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.ONE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.TWO]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.THREE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.FOUR]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.FIVE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.SIX]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.SEVEN]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.EIGHT]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.NINE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.EQUALS]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.CALCULATE_RESULT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.DOT]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_FLOAT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.MULTIPLY]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.OPERATOR,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.DIVIDE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.OPERATOR,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.PLUS]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.OPERATOR,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.MINUS]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.OPERATOR,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.PLUS_MINUS]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.PARENTHESES_RIGHT]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.PARENTHESES,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.SQUARE_ROOT]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.OPERATOR,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.SQUARE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.OPERATOR,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.CLEAR]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.START\r\n            }\r\n        },\r\n        [_enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_FLOAT]: {\r\n            on: {\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.DOT]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_FLOAT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.MULTIPLY]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.OPERATOR,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.DIVIDE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.OPERATOR,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.PLUS]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.OPERATOR,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.MINUS]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.OPERATOR,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.PLUS_MINUS]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.ZERO]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_FLOAT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.ONE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_FLOAT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.TWO]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_FLOAT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.THREE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_FLOAT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.FOUR]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_FLOAT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.FIVE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_FLOAT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.SIX]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_FLOAT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.SEVEN]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_FLOAT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.EIGHT]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_FLOAT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.NINE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_FLOAT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.EQUALS]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.CALCULATE_RESULT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.PARENTHESES_RIGHT]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.PARENTHESES,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.SQUARE_ROOT]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.OPERATOR,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.SQUARE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.OPERATOR,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.CLEAR]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.START\r\n            }\r\n        },\r\n        [_enums__WEBPACK_IMPORTED_MODULE_0__.Machine.OPERATOR]: {\r\n            on: {\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.DOT]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_FLOAT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.ZERO]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.ONE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.TWO]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.THREE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.FOUR]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.FIVE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.SIX]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.SEVEN]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.EIGHT]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.NINE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.PARENTHESES_LEFT]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.PARENTHESES,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.CLEAR]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.START\r\n            }\r\n        },\r\n        [_enums__WEBPACK_IMPORTED_MODULE_0__.Machine.PARENTHESES]: {\r\n            on: {\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.ZERO]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.ONE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.TWO]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.THREE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.FOUR]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.FIVE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.SIX]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.SEVEN]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.EIGHT]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.NINE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.EQUALS]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.CALCULATE_RESULT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.CLEAR]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.START\r\n            }\r\n        },\r\n        [_enums__WEBPACK_IMPORTED_MODULE_0__.Machine.CALCULATE_RESULT]: {\r\n            on: {\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.MULTIPLY]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.CONTINUE_CALCULATION,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.DIVIDE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.CONTINUE_CALCULATION,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.PLUS]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.CONTINUE_CALCULATION,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.MINUS]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.CONTINUE_CALCULATION,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.PLUS_MINUS]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.DOT]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_FLOAT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.ZERO]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.ONE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.TWO]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.THREE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.FOUR]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.FIVE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.SIX]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.SEVEN]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.EIGHT]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.NINE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.ARG_INT,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.CLEAR]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.START\r\n            }\r\n        },\r\n        [_enums__WEBPACK_IMPORTED_MODULE_0__.Machine.CONTINUE_CALCULATION]: {\r\n            on: {\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.MULTIPLY]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.OPERATOR,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.DIVIDE]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.OPERATOR,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.PLUS]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.OPERATOR,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.MINUS]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.OPERATOR,\r\n                [_enums__WEBPACK_IMPORTED_MODULE_0__.Keys.CLEAR]: _enums__WEBPACK_IMPORTED_MODULE_0__.Machine.START\r\n            }\r\n        }\r\n    }\r\n};\r\nconst state = {\r\n    machineState: machine.initial,\r\n    previousMachineState: null,\r\n    inputFormula: \"\",\r\n    inputResult: \"\",\r\n    pressedKey: \"C\",\r\n    previousPressedKey: \"C\"\r\n};\r\nconst numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];\r\nconst operators = [\"+\", \"-\", \"*\", \"/\"];\r\nconst baseOperations = [\"C\", \"CE\", \"Delete\"];\r\nconst buttons = document.querySelector(\".buttons\"), inputFormula = document.querySelector(\".input-formula\"), inputResult = document.querySelector(\".input-result\");\r\n\n\n//# sourceURL=webpack://windows-10-calculator/./src/constants.ts?");

/***/ }),

/***/ "./src/enums.ts":
/*!**********************!*\
  !*** ./src/enums.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Machine\": () => (/* binding */ Machine),\n/* harmony export */   \"Keys\": () => (/* binding */ Keys)\n/* harmony export */ });\nvar Machine;\r\n(function (Machine) {\r\n    Machine[\"START\"] = \"START\";\r\n    Machine[\"ARG_INT\"] = \"ARG_INT\";\r\n    Machine[\"ARG_FLOAT\"] = \"ARG_FLOAT\";\r\n    Machine[\"OPERATOR\"] = \"OPERATOR\";\r\n    Machine[\"PARENTHESES\"] = \"PARENTHESES\";\r\n    Machine[\"CALCULATE_RESULT\"] = \"CALCULATE_RESULT\";\r\n    Machine[\"CONTINUE_CALCULATION\"] = \"CONTINUE_CALCULATION\";\r\n})(Machine || (Machine = {}));\r\nvar Keys;\r\n(function (Keys) {\r\n    Keys[\"PARENTHESES_LEFT\"] = \"(\";\r\n    Keys[\"PARENTHESES_RIGHT\"] = \")\";\r\n    Keys[\"DOT\"] = \".\";\r\n    Keys[\"CLEAR\"] = \"C\";\r\n    Keys[\"CLEAR_ENTRY\"] = \"CE\";\r\n    Keys[\"DELETE\"] = \"Delete\";\r\n    Keys[\"MULTIPLY\"] = \"*\";\r\n    Keys[\"DIVIDE\"] = \"/\";\r\n    Keys[\"PLUS\"] = \"+\";\r\n    Keys[\"MINUS\"] = \"-\";\r\n    Keys[\"EQUALS\"] = \"=\";\r\n    Keys[\"PLUS_MINUS\"] = \"+/-\";\r\n    Keys[\"SQUARE_ROOT\"] = \"\\u221A\";\r\n    Keys[\"SQUARE\"] = \"x\\u00B2\";\r\n    Keys[\"ZERO\"] = \"0\";\r\n    Keys[\"ONE\"] = \"1\";\r\n    Keys[\"TWO\"] = \"2\";\r\n    Keys[\"THREE\"] = \"3\";\r\n    Keys[\"FOUR\"] = \"4\";\r\n    Keys[\"FIVE\"] = \"5\";\r\n    Keys[\"SIX\"] = \"6\";\r\n    Keys[\"SEVEN\"] = \"7\";\r\n    Keys[\"EIGHT\"] = \"8\";\r\n    Keys[\"NINE\"] = \"9\";\r\n})(Keys || (Keys = {}));\r\n\n\n//# sourceURL=webpack://windows-10-calculator/./src/enums.ts?");

/***/ }),

/***/ "./src/machine.ts":
/*!************************!*\
  !*** ./src/machine.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"transition\": () => (/* binding */ transition),\n/* harmony export */   \"interpretMachine\": () => (/* binding */ interpretMachine)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ \"./src/enums.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n\r\n\r\n\r\nconst transition = (currentState, key) => {\r\n    const nextState = _constants__WEBPACK_IMPORTED_MODULE_0__.machine.states[currentState].on[key] || currentState;\r\n    _constants__WEBPACK_IMPORTED_MODULE_0__.state.previousMachineState = _constants__WEBPACK_IMPORTED_MODULE_0__.state.machineState;\r\n    _constants__WEBPACK_IMPORTED_MODULE_0__.state.machineState = nextState;\r\n    _constants__WEBPACK_IMPORTED_MODULE_0__.state.previousPressedKey = _constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey;\r\n    _constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey = key;\r\n};\r\nconst interpretMachine = () => {\r\n    if (_constants__WEBPACK_IMPORTED_MODULE_0__.baseOperations.includes(_constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey)) {\r\n        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.performBaseOperations)();\r\n        return;\r\n    }\r\n    switch (_constants__WEBPACK_IMPORTED_MODULE_0__.state.machineState) {\r\n        case _enums__WEBPACK_IMPORTED_MODULE_1__.Machine.START: {\r\n            if (_constants__WEBPACK_IMPORTED_MODULE_0__.numbers.includes(+_constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey)) {\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult += _constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey;\r\n                break;\r\n            }\r\n            else {\r\n                break;\r\n            }\r\n        }\r\n        case _enums__WEBPACK_IMPORTED_MODULE_1__.Machine.ARG_INT: {\r\n            if (_constants__WEBPACK_IMPORTED_MODULE_0__.numbers.includes(+_constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey)) {\r\n                if (_constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey === _enums__WEBPACK_IMPORTED_MODULE_1__.Keys.ZERO &&\r\n                    _constants__WEBPACK_IMPORTED_MODULE_0__.state.previousPressedKey === _enums__WEBPACK_IMPORTED_MODULE_1__.Keys.ZERO &&\r\n                    _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult.length <= 1) {\r\n                    break;\r\n                }\r\n                if (_constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult.startsWith(_enums__WEBPACK_IMPORTED_MODULE_1__.Keys.ZERO)) {\r\n                    _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult = _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult.replace(_enums__WEBPACK_IMPORTED_MODULE_1__.Keys.ZERO, \"\") + _constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey;\r\n                    break;\r\n                }\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult += _constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey;\r\n                break;\r\n            }\r\n            if (_constants__WEBPACK_IMPORTED_MODULE_0__.state.previousMachineState === _enums__WEBPACK_IMPORTED_MODULE_1__.Machine.CALCULATE_RESULT) {\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputFormula = \"\";\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult = _constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey;\r\n                break;\r\n            }\r\n            if (_constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey === _enums__WEBPACK_IMPORTED_MODULE_1__.Keys.PLUS_MINUS && _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult.length >= 1) {\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.invertNumberSign)(_constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult);\r\n                break;\r\n            }\r\n        }\r\n        case _enums__WEBPACK_IMPORTED_MODULE_1__.Machine.ARG_FLOAT: {\r\n            if (_constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult.includes(_enums__WEBPACK_IMPORTED_MODULE_1__.Keys.DOT) && _constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey === _enums__WEBPACK_IMPORTED_MODULE_1__.Keys.DOT) {\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult = _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult;\r\n                break;\r\n            }\r\n            if (_constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey === _enums__WEBPACK_IMPORTED_MODULE_1__.Keys.DOT) {\r\n                if (_constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult.length < 1) {\r\n                    _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult = \"0.\";\r\n                    break;\r\n                }\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult += _enums__WEBPACK_IMPORTED_MODULE_1__.Keys.DOT;\r\n                break;\r\n            }\r\n            if (_constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey === _enums__WEBPACK_IMPORTED_MODULE_1__.Keys.PLUS_MINUS && _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult.length >= 1) {\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.invertNumberSign)(_constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult);\r\n                break;\r\n            }\r\n            if (_constants__WEBPACK_IMPORTED_MODULE_0__.numbers.includes(+_constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey)) {\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult += _constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey;\r\n                break;\r\n            }\r\n        }\r\n        case _enums__WEBPACK_IMPORTED_MODULE_1__.Machine.OPERATOR: {\r\n            if (_constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey === _constants__WEBPACK_IMPORTED_MODULE_0__.state.previousPressedKey) {\r\n                break;\r\n            }\r\n            if (_constants__WEBPACK_IMPORTED_MODULE_0__.operators.includes(_constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey) &&\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.operators.includes(_constants__WEBPACK_IMPORTED_MODULE_0__.state.previousPressedKey)) {\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputFormula = _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputFormula.slice(0, -1) + _constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey;\r\n                break;\r\n            }\r\n            if (_constants__WEBPACK_IMPORTED_MODULE_0__.operators.includes(_constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey)) {\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputFormula += _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult + _constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey;\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult = \"\";\r\n                break;\r\n            }\r\n            if (_constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey === _enums__WEBPACK_IMPORTED_MODULE_1__.Keys.SQUARE_ROOT) {\r\n                const result = Math.sqrt(Number(_constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult));\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputFormula += `${result}`;\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult = \"\";\r\n                break;\r\n            }\r\n            if (_constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey === _enums__WEBPACK_IMPORTED_MODULE_1__.Keys.SQUARE) {\r\n                const result = Math.pow(Number(_constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult), 2);\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputFormula += `${result}`;\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult = \"\";\r\n                break;\r\n            }\r\n        }\r\n        case _enums__WEBPACK_IMPORTED_MODULE_1__.Machine.PARENTHESES: {\r\n            if (_constants__WEBPACK_IMPORTED_MODULE_0__.state.previousMachineState === _enums__WEBPACK_IMPORTED_MODULE_1__.Machine.START) {\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputFormula += _enums__WEBPACK_IMPORTED_MODULE_1__.Keys.PARENTHESES_LEFT;\r\n                break;\r\n            }\r\n            if (_constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey === _enums__WEBPACK_IMPORTED_MODULE_1__.Keys.PARENTHESES_RIGHT) {\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputFormula += _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult + _constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey;\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult = \"\";\r\n                break;\r\n            }\r\n            _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputFormula += _constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey;\r\n        }\r\n        case _enums__WEBPACK_IMPORTED_MODULE_1__.Machine.CALCULATE_RESULT: {\r\n            if (_constants__WEBPACK_IMPORTED_MODULE_0__.operators.some(el => _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputFormula.includes(el))) {\r\n                if ([..._constants__WEBPACK_IMPORTED_MODULE_0__.operators, _enums__WEBPACK_IMPORTED_MODULE_1__.Keys.EQUALS].includes(_constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey)) {\r\n                    const result = `${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.calculateResult)(_constants__WEBPACK_IMPORTED_MODULE_0__.state.inputFormula + _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult)}`;\r\n                    _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputFormula += _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult + _enums__WEBPACK_IMPORTED_MODULE_1__.Keys.EQUALS;\r\n                    _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult = result;\r\n                    break;\r\n                }\r\n            }\r\n            if (_constants__WEBPACK_IMPORTED_MODULE_0__.numbers.includes(+_constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey)) {\r\n                _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult = _constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey;\r\n                break;\r\n            }\r\n        }\r\n        case _enums__WEBPACK_IMPORTED_MODULE_1__.Machine.CONTINUE_CALCULATION: {\r\n            _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputFormula = _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult + _constants__WEBPACK_IMPORTED_MODULE_0__.state.pressedKey;\r\n            _constants__WEBPACK_IMPORTED_MODULE_0__.state.inputResult = \"\";\r\n            _constants__WEBPACK_IMPORTED_MODULE_0__.state.machineState = _enums__WEBPACK_IMPORTED_MODULE_1__.Machine.OPERATOR;\r\n            break;\r\n        }\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://windows-10-calculator/./src/machine.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateResult\": () => (/* binding */ calculateResult),\n/* harmony export */   \"drawResult\": () => (/* binding */ drawResult),\n/* harmony export */   \"drawFormula\": () => (/* binding */ drawFormula),\n/* harmony export */   \"invertNumberSign\": () => (/* binding */ invertNumberSign),\n/* harmony export */   \"performBaseOperations\": () => (/* binding */ performBaseOperations)\n/* harmony export */ });\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ \"./src/enums.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.ts\");\n\r\n\r\nconst calculateResult = (equation) => {\r\n    const multiplyDivide = /([+-]?\\d*\\.?\\d+(?:e[+-]\\d+)?)\\s*([*/])\\s*([+-]?\\d*\\.?\\d+(?:e[+-]\\d+)?)/;\r\n    const plusMinus = /([+-]?\\d*\\.?\\d+(?:e[+-]\\d+)?)\\s*([+-])\\s*([+-]?\\d*\\.?\\d+(?:e[+-]\\d+)?)/;\r\n    const parentheses = /(\\d)?\\s*\\(([^()]*)\\)\\s*/;\r\n    let originalEquation = equation;\r\n    let currentEquation;\r\n    while (originalEquation.search(/^\\s*([+-]?\\d*\\.?\\d+(?:e[+-]\\d+)?)\\s*$/) === -1) {\r\n        originalEquation = calculateParentheses(originalEquation);\r\n        if (originalEquation === currentEquation) {\r\n            return \"Error\";\r\n        }\r\n        currentEquation = originalEquation;\r\n    }\r\n    return originalEquation;\r\n    function calculateParentheses(equation) {\r\n        while (equation.search(parentheses) !== -1) {\r\n            equation = equation.replace(parentheses, (a, b, c) => {\r\n                c = handleMultiplicationDivision(c);\r\n                c = handleAdditionSubtraction(c);\r\n                return typeof b === \"string\" ? b + \"*\" + c : c;\r\n            });\r\n        }\r\n        equation = handleMultiplicationDivision(equation);\r\n        equation = handleAdditionSubtraction(equation);\r\n        return equation;\r\n    }\r\n    function handleMultiplicationDivision(equation) {\r\n        while (equation.search(multiplyDivide) !== -1) {\r\n            equation = equation.replace(multiplyDivide, a => {\r\n                const sides = multiplyDivide.exec(a);\r\n                if (sides === null) {\r\n                    return \"\";\r\n                }\r\n                const result = sides[2] === \"*\" ? +sides[1] * +sides[3] : +sides[1] / +sides[3];\r\n                return result >= 0 ? \"+\" + result : `${result}`;\r\n            });\r\n        }\r\n        return equation;\r\n    }\r\n    function handleAdditionSubtraction(equation) {\r\n        equation = equation.replace(/([+-])([+-])(\\d|\\.)/g, (a, b, c, d) => {\r\n            return (b === c ? \"+\" : \"-\") + d;\r\n        });\r\n        while (equation.search(plusMinus) !== -1) {\r\n            equation = equation.replace(plusMinus, a => {\r\n                const sides = plusMinus.exec(a);\r\n                if (sides === null) {\r\n                    return \"\";\r\n                }\r\n                return sides[2] === \"+\"\r\n                    ? `${+sides[1] + +sides[3]}`\r\n                    : `${+sides[1] - +sides[3]}`;\r\n            });\r\n        }\r\n        return equation;\r\n    }\r\n};\r\nconst drawResult = () => {\r\n    _constants__WEBPACK_IMPORTED_MODULE_1__.inputResult.innerText = _constants__WEBPACK_IMPORTED_MODULE_1__.state.inputResult;\r\n};\r\nconst drawFormula = () => {\r\n    _constants__WEBPACK_IMPORTED_MODULE_1__.inputFormula.innerText = _constants__WEBPACK_IMPORTED_MODULE_1__.state.inputFormula;\r\n};\r\nconst invertNumberSign = (num) => {\r\n    const number = Number(num);\r\n    return `${number * -1}`;\r\n};\r\nconst performBaseOperations = () => {\r\n    if (_constants__WEBPACK_IMPORTED_MODULE_1__.state.pressedKey === _enums__WEBPACK_IMPORTED_MODULE_0__.Keys.CLEAR) {\r\n        _constants__WEBPACK_IMPORTED_MODULE_1__.state.inputFormula = \"\";\r\n        _constants__WEBPACK_IMPORTED_MODULE_1__.state.inputResult = \"\";\r\n    }\r\n    if (_constants__WEBPACK_IMPORTED_MODULE_1__.state.pressedKey === _enums__WEBPACK_IMPORTED_MODULE_0__.Keys.CLEAR_ENTRY) {\r\n        _constants__WEBPACK_IMPORTED_MODULE_1__.state.inputResult = \"\";\r\n    }\r\n    if (_constants__WEBPACK_IMPORTED_MODULE_1__.state.pressedKey === _enums__WEBPACK_IMPORTED_MODULE_0__.Keys.DELETE) {\r\n        _constants__WEBPACK_IMPORTED_MODULE_1__.state.inputResult = _constants__WEBPACK_IMPORTED_MODULE_1__.state.inputResult.slice(0, -1);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://windows-10-calculator/./src/utils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;