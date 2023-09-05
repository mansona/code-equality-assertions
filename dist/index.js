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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  codeContains: () => codeContains,
  codeEqual: () => codeEqual
});
module.exports = __toCommonJS(src_exports);
var import_diff = require("diff");
var import_prettier = __toESM(require("prettier"));
var import_parser_babel = __toESM(require("prettier/parser-babel.js"));
var babel = __toESM(require("@babel/core"));
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  codeContains,
  codeEqual
});
