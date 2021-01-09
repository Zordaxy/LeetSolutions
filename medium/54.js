// 54. Spiral Matrix
// Given an m x n matrix, return all elements of the matrix in spiral order.

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;

    let result = [];

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) result.push(matrix[top][i]);
        top++;
        if (top > bottom) break;

        for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
        right--;
        if (left > right) break;

        for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
        bottom--;
        if (top > bottom) break;

        for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
        left++;
        if (left > right) break;
    }
    return result;
};