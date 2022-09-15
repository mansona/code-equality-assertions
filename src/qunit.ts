import { codeEqual, codeContains } from "./index.js";

import "qunit";

declare global {
  interface Assert {
    codeEqual: typeof codeEqual;
    codeContains: typeof codeContains;
  }
}

(globalThis as any).QUnit.assert.codeEqual = function(
  this: Assert,
  actual: string,
  expected: string,
  message = "code should be equal"
) {
  let { result, diff } = codeEqual(actual, expected);
  this.pushResult({
    result,
    actual,
    expected,
    message: diff ? `${message}\n${diff}` : message
  });
};

(globalThis as any).QUnit.assert.codeContains = function(
  this: Assert,
  actual: string,
  expected: string,
  message = `code should contain ${expected}`
) {
  let result = codeContains(actual, expected);
  this.pushResult({
    result,
    actual,
    expected,
    message
  });
}