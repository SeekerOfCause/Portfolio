"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var input;
function GenPage() {
    var _a = (0, react_1.useState)(false), displayResult = _a[0], setDisplayResult = _a[1];
    var _b = (0, react_1.useState)(""), result = _b[0], setResult = _b[1];
    var _c = (0, react_1.useState)(""), weaponType = _c[0], setType = _c[1];
    var onTypeChange = function (e) {
        setType(e.target.value);
    };
    var _d = (0, react_1.useState)(false), magical = _d[0], setMagical = _d[1];
    var _e = (0, react_1.useState)(false), ancient = _e[0], setAncient = _e[1];
    var _f = (0, react_1.useState)(""), userDesc = _f[0], setUserDesc = _f[1];
    var handleUserDesc = function (event) {
        var userinput = event.target.value;
        setUserDesc(userinput);
    };
    var handleMagicalChange = function (event) {
        if (event.target.checked) {
            setMagical(true);
        }
        else {
            setMagical(false);
        }
    };
    var handleAncientChange = function (event) {
        if (event.target.checked) {
            setAncient(true);
        }
        else {
            setAncient(false);
        }
    };
    var isAnchient;
    var isMagical;
    var userDescription;
    return (<div>
          <div style={{ display: displayResult ? "block" : "none" }}>
            <div>
              <button onClick={reset}>return</button>
            {result}
            </div>
            </div>
          <div style={{ display: displayResult ? "none" : "block" }}>
        <form>
  <div className="form-group">
    <label htmlFor="select">Select</label> 
    <div>
      <select id="select" name="select" className="custom-select" onChange={onTypeChange}>
        <option value="Short Sword">Short Sword</option>
        <option value="Long Sword">Long Sword</option>
        <option value="Broad Sword">Broad Sword</option>
        <option value="Rapier">Rapier</option>
        <option value="Dagger">Dagger</option>
        <option value="Long Bow">Long Bow</option>
        <option value="Bow">Bow</option>
        <option value="Battle Axe">Battle Axe</option>
        <option value="Scimitar">Scimitar</option>
        <option value="Staff">Staff</option>
        <option value="Lance">Lance</option>
        <option value="Spell Book">Spell Book</option>
      </select>
    </div>
  </div>
  <div className="form-group">
    <label>Checkboxes</label> 
    <div>
      <div className="custom-control custom-checkbox custom-control-inline">
        <input name="checkbox" id="checkbox_0" type="checkbox" className="custom-control-input" value="is ancient"/> 
        <label htmlFor="checkbox_0" className="custom-control-label" onChange={handleAncientChange}>Ancient</label>
      </div>
      <div className="custom-control custom-checkbox custom-control-inline">
        <input name="checkbox" id="checkbox_1" type="checkbox" className="custom-control-input" value="Magical"/> 
        <label htmlFor="checkbox_1" className="custom-control-label" onChange={handleMagicalChange}>Magical</label>
      </div>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="userDescription"></label> 
    <textarea id="userDescription" name="userDescription" aria-describedby="userDescriptionHelpBlock" className="form-control"></textarea> 
    <span id="userDescriptionHelpBlock" className="form-text text-muted">Enter anything specific you would like to add</span>
  </div> 
  <div className="form-group">
    <button name="submit" type="submit" className="btn btn-primary" onClick={setDescription}>Submit</button>
  </div>
    </form>
    </div>
    </div>);
    function setDescription() {
        var input;
        var magical;
        var anchient;
        input = {
            type: weaponType,
            magic: magical,
            anchient: ancient,
            userDescription: ""
        };
        return getDescription(input);
    }
    function getDescription(input) {
        JSON.stringify({ requestInput: input });
        console.log(input);
        onSubmit();
    }
    function onSubmit() {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("/api/generate", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                //Stringify our input into .json format for submission to API
                                body: JSON.stringify({ weaponChoice: input }),
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        //throw error if no response heard
                        if (response.status !== 200) {
                            throw (data.error ||
                                new Error("Request failed with status ".concat(response.status)));
                        }
                        //set our result to the result from data .json reponse from API
                        setResult(data.result);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        // Implement error handling logic here
                        console.error(error_1);
                        alert(error_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function reset() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                setDisplayResult(false);
                setResult("");
                return [2 /*return*/];
            });
        });
    }
}
exports.default = GenPage;
