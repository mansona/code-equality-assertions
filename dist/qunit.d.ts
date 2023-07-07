declare global {
    interface Assert {
        codeEqual: typeof assertCodeEqual;
        codeContains: typeof assertCodeContains;
    }
}
declare function assertCodeEqual(this: Assert, actual: string, expected: string, message?: string): void;
declare function assertCodeContains(this: Assert, actual: string, expected: string, message?: string): void;
declare function install(assert: Assert): void;

export { install };
