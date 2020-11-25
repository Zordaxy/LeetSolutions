// 52. N-Queens II
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
// Given an integer n, return the number of distinct solutions to the n-queens puzzle.

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    // Can be reeplaced with n*2 sized arrays
    let cols = new Set();
    let hills = new Set();
    let slopes = new Set();

    let placeQueen = (row, col) => {
        // Project hills and slopes to the left vertical with values 0 -> 2n and -n -> n.
        cols.add(col);
        hills.add(row - col);
        slopes.add(row + col);
    }

    let removeQueen = (row, col) => {
        cols.delete(col);
        hills.delete(row - col);
        slopes.delete(row + col);
    }

    let isSafe = (row, col) => {
        return !cols.has(col) && !hills.has(row - col) && !slopes.has(row + col);
    }
    
    let backtrack = (row, count) => {
        if (row === n) {
            return count + 1;
        }

        for (let i = 0; i < n; i++) {
            if (isSafe(row, i)) {
                placeQueen(row, i);
                count = backtrack(row + 1, count);
                removeQueen(row, i);
            }
        }
        return count;
    }
    
    return backtrack(0, 0);
};

console.log(totalNQueens(4), totalNQueens(5), totalNQueens(6), totalNQueens(7), totalNQueens(8));