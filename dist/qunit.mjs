import {
  codeContains,
  codeEqual
} from "./chunk-L7JA35K4.mjs";

// src/qunit.ts
import "qunit";
function assertCodeEqual(actual, expected, message = "code should be equal") {
  let { result, diff } = codeEqual(actual, expected);
  this.pushResult({
    result,
    actual,
    expected,
    message: diff ? `${message}
${diff}` : message
  });
}
function assertCodeContains(actual, expected, message = `code should contain ${expected}`) {
  let result = codeContains(actual, expected);
  this.pushResult({
    result,
    actual,
    expected,
    message
  });
}
function install(assert) {
  assert.codeEqual = assertCodeEqual;
  assert.codeContains = assertCodeContains;
}
export {
  install
};
