import { codeEqual, codeContains } from "./index.js";

import "qunit";

declare global {
  interface Assert {
    codeEqual: typeof assertCodeEqual;
    codeContains: typeof assertCodeContains;
  }
}

function assertCodeEqual(
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

function assertCodeContains(
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

export function install(qunit: QUnit) {
  qunit.assert.codeEqual = assertCodeEqual;
  qunit.assert.codeContains = assertCodeContains;
}
