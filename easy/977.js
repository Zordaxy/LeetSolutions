// 977. Squares of a Sorted Array
// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Go up to the first nonnegative number. Set the pointers to move left and right from there. Then you simply have to check the magnitude on each side.

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    const result = [];
    let head = 0;
    let tail = A.length - 1;

    while (head <= tail) {
        let left = A[head] * A[head];
        let right = A[tail] * A[tail];
        if (left > right) {
            result.push(left);
            head++;
        } else {
            result.push(right);
            tail--;
        }
    }

    return result.reverse();
};