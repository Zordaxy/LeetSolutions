// 240. Search a 2D Matrix II
// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || !matrix.length || !matrix[0].length) return false;
    let y = 0;
    let x = matrix[0].length - 1;
    
    while(x !== -1 && y !== matrix.length) {
        if (matrix[y][x] === target) return true;
        if (matrix[y][x] > target) {
            x--;
        } else {
            y++;
        }
    }
    
    return false;
};