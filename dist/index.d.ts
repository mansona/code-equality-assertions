declare function codeEqual(actual: string, expected: string): {
    result: true;
    diff: undefined;
} | {
    result: false;
    diff: string;
};
declare function codeContains(actual: string, expected: string): boolean;

export { codeContains, codeEqual };
