const chai = require('chai');
const { codeEquality } = require("code-equality-assertions/chai");

chai.use(codeEquality)

const { expect } = chai;

describe("code-equality", () => {
  it("successful equality test", () => {
    expect(`console.log("hello")`).to.equalCode(`console.log('hello' );`);
  });

  it("failed equality test", () => {
    expect(`console.log("hello")`).to.equalCode(`console.log('goodbye' );`);
  });

  it("successful negated equality test", () => {
    expect(`console.log("hello")`).to.not.equalCode(`console.log('helo' );`);
  });

  it("failed negated equality test", () => {
    expect(`console.log("hello")`).to.not.equalCode(`console.log('hello' );`);
  });

  it("successful contains test", () => {
    expect(`function x() { return '123'; }`).to.containCode('"123"');
  });

  it("failed contains test", () => {
    expect(`function x() { return '123'; }`).to.containCode('"321"');
  });

  it("successful negated contains test", () => {
    expect(`function x() { return '123'; }`).to.not.containCode('"13"');
  });

  it("failed negated contains test", () => {
    expect(`function x() { return '123'; }`).to.not.containCode('"123"');
  });
});
