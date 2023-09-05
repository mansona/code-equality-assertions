import {
  codeContains,
  codeEqual
} from "./chunk-L7JA35K4.mjs";

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
export {
  codeContains,
  codeEqual
};
