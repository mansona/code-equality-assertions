import QUnit from 'qunit';
import "code-equality-assertions/qunit";
const { module, test } = QUnit;


module("code-equality", () =>{
  test("successful case", (assert) => {
    assert.codeEqual(`console.log("hello")`, `console.log('hello' );`)
  });

  test("failure case", (assert) => {
    assert.codeEqual(`console.log("hello")`, `console.log('goodbye' );`)
  });
})