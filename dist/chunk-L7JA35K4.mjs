// src/index.ts
import { createPatch } from "diff";
import prettier from "prettier";
import parser from "prettier/parser-babel.js";
import * as babel from "@babel/core";
function standardize(code) {
  return prettier.format(babel.transform(code, { babelrc: false }).code, { parser: "babel", plugins: [parser] });
}
function codeEqual(actual, expected) {
  let standardActual = standardize(actual);
  let standardExpected = standardize(expected);
  if (standardActual === standardExpected) {
    return { result: true, diff: void 0 };
  } else {
    return {
      result: false,
      diff: createPatch("", standardExpected, standardActual).split("\n").slice(4).join("\n")
    };
  }
}
function codeContains(actual, expected) {
  let standardActual = standardize(actual);
  let standardExpected = standardize(expected);
  return standardActual.indexOf(standardExpected) !== -1;
}

export {
  codeEqual,
  codeContains
};
