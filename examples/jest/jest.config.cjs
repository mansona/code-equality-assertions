/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  "testRegex": "example-test.ts",
  globals: {
    'ts-jest': {
      useESM: true,
      isolatedModules: true,
    },
  },
};