import { createPatch } from "diff";
import prettier from "prettier";
// @ts-expect-error
import parser from "prettier/esm/parser-babel.mjs";

function standardize(code: string): string {
  return prettier.format(code, { parser: "babel", plugins: [parser] });
}

export function codeEqual(
  actual: string,
  expected: string
): { result: true; diff: undefined } | { result: false; diff: string } {
  let standardActual = standardize(actual)!;
  let standardExpected = standardize(expected)!;

  if (standardActual === standardExpected) {
    return { result: true, diff: undefined };
  } else {
    return {
      result: false,
      diff: createPatch("", standardExpected, standardActual)
        .split("\n")
        .slice(4)
        .join("\n"),
    };
  }
}


export function codeContains(
  actual: string,
  expected: string
): boolean {
  let standardActual = standardize(actual)!;
  let standardExpected = standardize(expected)!;
  return standardActual.indexOf(standardExpected) !== -1;
}