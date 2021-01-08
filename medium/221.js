// 221. Maximal Square
// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let dp = new Array(matrix.length).fill(null).map(x => new Array(matrix[0].length));
    let maxSize = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (!+matrix[i][j]) continue;
            let left = j > 0 ? (dp[i][j - 1] || 0) : 0;
            let top = i > 0 ? (dp[i - 1][j] || 0) : 0;
            let diag = i > 0 && j > 0 ? (dp[i - 1][j - 1] || 0) : 0;
            let val = Math.min(Math.min(left, top), diag);

            maxSize = Math.max(maxSize, val + 1);
            dp[i][j] = val + 1;
        }
    }

    // console.log(dp);
    return maxSize * maxSize;
};

let matrix = [
    ["1", "0", "1", "1", "0", "1"],
    ["1", "1", "1", "1", "1", "1"],
    ["0", "1", "1", "0", "1", "1"],
    ["1", "1", "1", "0", "1", "0"],
    ["0", "1", "1", "1", "1", "1"],
    ["1", "1", "0", "1", "1", "1"]
];
console.log(maximalSquare(matrix)); // 4
console.log(maximalSquare([["0","1"]])); // 1