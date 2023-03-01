import QUnit from "qunit";
import { install } from "code-equality-assertions/qunit";
const { module, test } = QUnit;

install(QUnit);

module("code-equality", () => {
  test("successful equality test", (assert) => {
    assert.codeEqual(`console.log("hello")`, `console.log('hello' );`);
  });

  test("failed equality test", (assert) => {
    assert.codeEqual(`console.log("hello")`, `console.log('goodbye' );`);
  });

  test("successful contains test", (assert) => {
    assert.codeContains(`function x() { return '123'; }`, '"123"');
  });

  test("failed contains test", (assert) => {
    assert.codeContains(`function x() { return '123'; }`, '"321"');
  });
});
