export { codeContains, codeEqual } from './index.js';

declare global {
    namespace jest {
        interface Matchers<R> {
            toEqualCode(expectedCode: string, message?: string): void;
            toContainCode(expectedCode: string, message?: string): void;
        }
    }
}
