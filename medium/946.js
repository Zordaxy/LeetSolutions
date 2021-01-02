// 946. Validate Stack Sequences
// Given two sequences pushed and popped with distinct values, return true if and only if this could have been the result of a sequence of push and pop operations on an initially empty stack.

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let stack = [];
    for (let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i]);
        while (popped.length && popped[0] === stack[stack.length - 1]) {
            popped.shift();
            stack.pop();
        }
    }
    return popped.length === 0;
};

console.log(validateStackSequences([4, 0, 1, 2, 3], [4, 2, 3, 0, 1]));