# Code Equality Assertions

Test assertion library for checking the contents of strings of Javascript.
 
 - ignores non-semantic differences like whitespace and quote style
 - gives a reasonable diff when the assertion fails
 - works in Node or browsers

## QUnit Integration 

```js
import QUnit from 'qunit';
import "code-equality-assertions/qunit";
QUnit.module('my tests', () => {
  QUnit.test('it works', (assert) => {
    assert.codeEqual(`console.log("hello")`, `console.log('hello' );`)
  })
});
```

## Low-level usage

```js
import { codeEqual } from 'code-equality-assertions';
let { result, diff } = codeEqual(someTest(), "console.log('hello')");
if (!result) {
  console.log(`Found a difference: ${diff}`);
}
```


## Contributing

1. `pnpm install`
2. `pnpm run build` or `pnpm run build --watch`
3. Launch any of the examples:
    - `pnpm run example:qunit-browser`
    - `pnpm run example:qunit-node`