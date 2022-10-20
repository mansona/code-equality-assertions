import "code-equality-assertions/jest";

describe("code-equality", () => {
  test("successful equality test", () => {
    expect(`console.log("hello")`).toEqualCode(`console.log('hello' );`);
  });

  test("failed equality test", () => {
    expect(`console.log("hello")`).toEqualCode(`console.log('goodbye' );`);
  });

  test("successful contains test", () => {
    expect(`function x() { return '123'; }`).toContainCode('"123"');
  });

  test("failed contains test", () => {
    expect(`function x() { return '123'; }`).toContainCode('"321"');
  });
});
