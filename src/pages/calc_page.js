"use client";
"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var calculator_1 = require("../components/calculator");
var fs = require("fs");
var inputOneText = "";
var inputTwoText = "";
var inputOperatorText = "";
var inputEntry;
var inputOneFinal = "";
var ans;
function CalculatorPad() {
  var _a = (0, react_1.useState)(inputOneText),
    inputOne = _a[0],
    updateTextOne = _a[1];
  var _b = (0, react_1.useState)(inputTwoText),
    inputTwo = _b[0],
    updateTextTwo = _b[1];
  var _c = (0, react_1.useState)(inputOperatorText),
    inputOp = _c[0],
    updateTextOp = _c[1];
  var _d = (0, react_1.useState)(false),
    inputOneTrue = _d[0],
    setInputTrue = _d[1];
  var _e = (0, react_1.useState)(""),
    ans = _e[0],
    setAns = _e[1];
  var _f = (0, react_1.useState)(false),
    ansDisplayed = _f[0],
    setAnsDisp = _f[1];
  return (
    <main className="h-100 d-flex justify-content-center align-items-center">
      <div>
        <div>
          <div className="gridContainer">
            <div className="calcDisp">
              <div
                className="calcDispText"
                style={{ display: ansDisplayed ? "none" : "block" }}
              >
                {inputOne}
                {inputOp}
                {inputTwo}
              </div>
              <div
                className="calcDispText"
                style={{ display: ansDisplayed ? "block" : "none" }}
              >
                {ans}
              </div>
            </div>
            <div className="calcRowOne">
              <div className="item1">
                <div className="numberPad"></div>
              </div>
              <div className="item2">
                <button
                  className="numberPadAC"
                  onClick={function () {
                    return allClear();
                  }}
                >
                  AC
                </button>
              </div>
              <div className="item3">
                <button
                  className="numberPad"
                  onClick={function () {
                    return updateOperator(" ^ ");
                  }}
                >
                  ^
                </button>
              </div>
              <div className="item4">
                <button
                  className="numberPad"
                  onClick={function () {
                    return updateOperator(" / ");
                  }}
                >
                  /
                </button>
              </div>
            </div>
            <div className="calcRowTwo">
              <div className="item1">
                <button
                  className="numberPad"
                  onClick={function () {
                    return updateCalcText("7");
                  }}
                >
                  7
                </button>
              </div>
              <div className="item2">
                <button
                  className="numberPad"
                  onClick={function () {
                    return updateCalcText("8");
                  }}
                >
                  8
                </button>
              </div>
              <div className="item3">
                <button
                  className="numberPad"
                  onClick={function () {
                    return updateCalcText("9");
                  }}
                >
                  9
                </button>
              </div>
              <div className="item4">
                <button
                  className="numberPad"
                  onClick={function () {
                    return updateOperator(" * ");
                  }}
                >
                  *
                </button>
              </div>
            </div>
            <div className="calcRowThree">
              <div className="item1">
                <button
                  className="numberPad"
                  onClick={function () {
                    return updateCalcText("4");
                  }}
                >
                  4
                </button>
              </div>
              <div className="item2">
                <button
                  className="numberPad"
                  onClick={function () {
                    return updateCalcText("5");
                  }}
                >
                  5
                </button>
              </div>
              <div className="item3">
                <button
                  className="numberPad"
                  onClick={function () {
                    return updateCalcText("6");
                  }}
                >
                  6
                </button>
              </div>
              <div className="item4">
                <button
                  className="numberPad"
                  onClick={function () {
                    return updateOperator(" + ");
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="calcRowFour">
              <div className="item1">
                <button
                  className="numberPad"
                  onClick={function () {
                    return updateCalcText("1");
                  }}
                >
                  1
                </button>
              </div>
              <div className="item2">
                <button
                  className="numberPad"
                  onClick={function () {
                    return updateCalcText("2");
                  }}
                >
                  2
                </button>
              </div>
              <div className="item3">
                <button
                  className="numberPad"
                  onClick={function () {
                    return updateCalcText("3");
                  }}
                >
                  3
                </button>
              </div>
              <div className="item4">
                <button
                  className="numberPad"
                  onClick={function () {
                    return updateOperator(" - ");
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className="calcRowFive">
              <div className="item1">
                <button
                  className="numberPad"
                  onClick={function () {
                    return updateCalcText("0");
                  }}
                >
                  0
                </button>
              </div>
              <div className="item2">
                <button
                  className="numberPad"
                  onClick={function () {
                    return updateCalcText(".");
                  }}
                >
                  .
                </button>
              </div>
              <div className="item3">
                <button
                  className="numberPad"
                  onClick={function () {
                    return getResult();
                  }}
                >
                  =
                </button>
              </div>
              <div className="item4">
                <button
                  className="numberPad"
                  onClick={function () {
                    return deleteCalcText();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -90 576 725"
                    transform="scale(.75)"
                  >
                    <path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );

  function updateCalcText(input) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        if (ansDisplayed == true) {
          allClear();
        } else {
          updateBranch(input);
        }
        return [2 /*return*/];
      });
    });
  }
  function updateBranch(input) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        if (!inputOneTrue) {
          inputOneText += input;
          updateTextOne(inputOneText);
        } else if (inputOneTrue) {
          inputTwoText += input;
          updateTextTwo(inputTwoText);
        }
        return [2 /*return*/];
      });
    });
  }
  function updateOperator(input) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        inputOperatorText = input;
        updateTextOp(inputOperatorText);
        setInputTrue(true);
        return [2 /*return*/];
      });
    });
  }
  function deleteCalcText() {
    return __awaiter(this, void 0, void 0, function () {
      var tempText, tempText;
      return __generator(this, function (_a) {
        if (!inputOneTrue) {
          if (inputOneText.length == 0) {
            setAns("");
            setAnsDisp(false);
            tempText = inputOneText.substring(0, inputOneText.length - 1);
            inputOneText = tempText;
            tempText = "";
            updateTextOne(inputOneText);
          }
        } else if (inputOneTrue && inputTwoText === "") {
          inputOperatorText = "";
          updateOperator(inputOperatorText);
          setInputTrue(false);
        } else {
          tempText = inputTwoText.substring(0, inputTwoText.length - 1);
          inputTwoText = tempText;
          tempText = "";
          updateTextTwo(inputTwoText);
        }
        return [2 /*return*/];
      });
    });
  }
  function getResult() {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        setAnsDisp(true);
        setAns((0, calculator_1.getInput)("" + inputOne + inputOp + inputTwo));
        return [2 /*return*/];
      });
    });
  }
  function allClear() {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        setAnsDisp(false);
        setInputTrue(false);
        inputOperatorText = "";
        inputOneText = "";
        inputTwoText = "";
        updateTextOne("");
        updateTextTwo("");
        updateTextOp("");
        return [2 /*return*/];
      });
    });
  }
}
exports.default = CalculatorPad;
