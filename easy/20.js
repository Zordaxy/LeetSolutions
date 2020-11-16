// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (!s || !s.length) return true;
    let map = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let q = s[i]
        if (!map.has(q)) {
            stack.push(q);
        } else {
            let pop = stack.pop(q);
            if (pop !== map.get(q)) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid('{[]()}')); // true
console.log(isValid('{[](}')); // false