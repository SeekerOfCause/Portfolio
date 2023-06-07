"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pow = exports.multiply = exports.divide = exports.subtract = exports.add = exports.isOperator = exports.setInputVars = exports.checkNum = exports.performOperation = exports.splitInput = exports.getInput = void 0;
var inputVars;
function getInput(input) {
    var toSplit;
    var toVars;
    var toPerf;
    var response;
    toSplit = input;
    toVars = splitInput(toSplit);
    toPerf = setInputVars(toVars);
    response = performOperation(toPerf);
    return response.toString();
}
exports.getInput = getInput;
function splitInput(input) {
    var splitIn = input.split(" ");
    return splitIn;
}
exports.splitInput = splitInput;
function performOperation(input) {
    var inputOp = input.operator;
    var firstNum = input.firstInput;
    var secondNum = input.secondInput;
    switch (inputOp) {
        case "+":
            //add(firstNum, secondNum);
            return firstNum + secondNum;
        case "-":
            //subtract(firstNum, secondNum);
            return firstNum - secondNum;
        case "/":
            // divide(firstNum, secondNum);
            return firstNum / secondNum;
        case "*":
            // multiply(firstNum, secondNum);
            return firstNum * secondNum;
        case "^":
            // pow(firstNum, secondNum);
            return Math.pow(firstNum, secondNum);
    }
    return firstNum;
}
exports.performOperation = performOperation;
function checkNum(input) {
    var isNum;
    if (!isNaN(parseFloat(input))) {
        isNum = true;
    }
    else {
        isNum = false;
    }
    return isNum;
}
exports.checkNum = checkNum;
function setInputVars(input) {
    if (checkNum(input[0]) && checkNum(input[2]) && isOperator(input[1])) {
        var inputVars_1;
        var inputVarsTemp = {
            firstInput: parseFloat(input[0]),
            operator: input[1],
            secondInput: parseFloat(input[2]),
        };
        return (inputVars_1 = inputVarsTemp);
    }
    return inputVars;
}
exports.setInputVars = setInputVars;
function isOperator(input) {
    switch (input) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "^":
            return true;
        default:
            return false;
    }
}
exports.isOperator = isOperator;
function add(firstNum, secondNum) {
    return firstNum + secondNum;
}
exports.add = add;
function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}
exports.subtract = subtract;
function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}
exports.divide = divide;
function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}
exports.multiply = multiply;
function pow(firstNum, secondNum) {
    return Math.pow(firstNum, secondNum);
}
exports.pow = pow;
