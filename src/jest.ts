import { codeEqual, codeContains } from "./index.js";

declare global {
  namespace jest {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<R> {
      toEqualCode(expectedCode: string, message?: string): void;
      toContainCode(expectedCode: string, message?: string): void;
    }
  }
}

// if our d.ts files under with only the declare global... stuff above, it
// gets different semantics than if it is detected as an ES module. This seems
// to trick typescript into making it really be a module. 
export * from './index.js';

function toEqualCode(
  actualCode: string,
  expectedCode: string,
  message?: string
): { pass: boolean; message(): string } {
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
    },
  };
}

function toContainCode(
  actualCode: string,
  expectedCode: string,
  message?: string
): { pass: boolean; message(): string } {
  return {
    pass: codeContains(actualCode, expectedCode),
    message: () => {
      if (message) {
        return `${message}: should contain ${expectedCode}`;
      } else {
        return `${actualCode} should contain ${expectedCode}`;
      }
    },
  };
}

expect.extend({
  toEqualCode,
  toContainCode,
});
