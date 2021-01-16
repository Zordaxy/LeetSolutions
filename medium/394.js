// 394. Decode String
// Given an encoded string, return its decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    // O(maxK ^ countK ⋅ n)
    let stack = [];

    let execute = () => {
        let inner = '';
        let el = stack.pop();
        while (el !== '[') {
            inner = el + inner;
            el = stack.pop();
        }

        let multiplier = "";
        while (stack.length && !isNaN(stack[stack.length - 1])) {
            multiplier = stack.pop() + multiplier;
        }

        for (let j = 0; j < +multiplier; j++) stack.push(inner);
    }

    // Push to stack until reach "]" than stack pop to obtain inner text and multiplier
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ']') {
            execute();
        } else {
            stack.push(s[i]);
        }
    }

    let result = "";
    while (stack.length) {
        result = stack.pop() + result;
    }

    return result;
};

// Better: with 2 stacks O(maxK⋅n):
// Case 1) If the current character is a digit (0-9), append it to the number k.
// Case 2) If the current character is a letter (a-z), append it to the currentString.
// Case 3) If current character is a opening bracket [, push k and currentString intocountStack and stringStack respectively.
// Case 4) Closing bracket ]: We must begin the decoding process



console.log(decodeString("3[a2[c]]"));