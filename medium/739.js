// 739. Daily Temperatures
// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.
// For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    if (!T || !T.length) return [];
    return byStack(T);
};

// Iterate from bottom and check previous indices
function byIndex(T) {
    let len = T.length - 1;
    let result = new Array(T);
    result[len] = 0;

    for (let i = len - 1; i >= 0; i--) {
        let timeTo = 1;
        while (T[i + timeTo] <= T[i]) {
            if (result[i + timeTo] === 0) {
                timeTo = 0;
                break;
            }
            timeTo = timeTo + result[i + timeTo];
        }
        result[i] = timeTo;
    }
    return result;
}

// Use stack to store those indexes we have not find answers
// Populate result (by index from stack) only if current temperature is higher then by index from stack.
function byStack(T)  {
    let stack = [];
    let len = T.length;
    let result = new Array(len).fill(0);

    for (let i = 0; i < len; i++) {
        while(stack.length && T[stack[stack.length - 1]] < T[i]) {
            let j = stack.pop();
            result[j] = i - j;
        }
        stack.push(i);
    }

    return result;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])) // [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70])) // [8,1,5,4,3,2,1,1,0,0]
