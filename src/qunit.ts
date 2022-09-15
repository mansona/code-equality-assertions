import { codeEqual } from "code-equality-assertions";

import "qunit";

declare global {
  interface Assert {
    codeEqual: typeof codeEqual;
  }
}

(globalThis as any).QUnit.assert.codeEqual = function(
  this: Assert,
  actual: string,
  expected: string,
  message = "code should match"
) {
  let { result, diff } = codeEqual(actual, expected);
  this.pushResult({
    result,
    actual,
    expected,
    message: diff ? `${message}\n${diff}` : message
  });
}