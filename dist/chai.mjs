import {
  codeContains,
  codeEqual
} from "./chunk-L7JA35K4.mjs";

// src/chai.ts
function codeEquality(_chai) {
  _chai.Assertion.addMethod("equalCode", function(expectedCode) {
    var obj = this._obj;
    let compared = codeEqual(obj, expectedCode);
    this.assert(
      compared.result,
      "expected code to match",
      "expected code to not match",
      expectedCode,
      obj
    );
  });
  _chai.Assertion.addMethod("containCode", function(expectedCode) {
    var obj = this._obj;
    this.assert(
      codeContains(obj, expectedCode),
      "expected #{this} to contain #{exp}",
      "expected #{this} to not contain #{exp}",
      expectedCode,
      obj,
      false
    );
  });
}
export {
  codeEquality
};
