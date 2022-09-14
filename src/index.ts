import { createPatch } from "diff";
import prettier from "prettier";
// @ts-expect-error 
import parser from "prettier/esm/parser-babel.mjs";

function standardize(code: string): string {
  return prettier.format(code, { parser: 'babel', plugins: [parser], });
}

export function codeEqual(actual: string, expected: string) {
  let standardActual = standardize(actual)!;
  let standardExpected = standardize(expected)!;

  let result = standardActual === standardExpected;
  let diff: string | undefined;

  if (!result) {
    diff = createPatch("", standardExpected, standardActual)
      .split("\n")
      .slice(4)
      .join("\n");
  }

  return { result, diff };
}
