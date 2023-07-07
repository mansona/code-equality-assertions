"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/jest.ts
var jest_exports = {};
__export(jest_exports, {
  codeContains: () => codeContains,
  codeEqual: () => codeEqual
});
module.exports = __toCommonJS(jest_exports);

// src/index.ts
var import_diff = require("diff");
var import_prettier = __toESM(require("prettier"), 1);
var import_parser_babel = __toESM(require("prettier/parser-babel.js"), 1);
var babel = __toESM(require("@babel/core"), 1);
function standardize(code) {
  return import_prettier.default.format(babel.transform(code, { babelrc: false }).code, { parser: "babel", plugins: [import_parser_babel.default] });
}
function codeEqual(actual, expected) {
  let standardActual = standardize(actual);
  let standardExpected = standardize(expected);
  if (standardActual === standardExpected) {
    return { result: true, diff: void 0 };
  } else {
    return {
      result: false,
      diff: (0, import_diff.createPatch)("", standardExpected, standardActual).split("\n").slice(4).join("\n")
    };
  }
}
function codeContains(actual, expected) {
  let standardActual = standardize(actual);
  let standardExpected = standardize(expected);
  return standardActual.indexOf(standardExpected) !== -1;
}

// src/jest.ts
function toEqualCode(actualCode, expectedCode, message) {
  let compared = codeEqual(actualCode, expectedCode);
  return {
    pass: compared.result,
    message: () => {
      if (!compared.result) {
        if (message) {
          return message + ": " + compared.diff;
        } else {
          return compared.diff;
        }
      } else {
        return message ?? "code is equal";
      }
    }
  };
}
function toContainCode(actualCode, expectedCode, message) {
  return {
    pass: codeContains(actualCode, expectedCode),
    message: () => {
      if (message) {
        return `${message}: should contain ${expectedCode}`;
      } else {
        return `${actualCode} should contain ${expectedCode}`;
      }
    }
  };
}
expect.extend({
  toEqualCode,
  toContainCode
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  codeContains,
  codeEqual
});
