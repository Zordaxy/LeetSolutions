// 36. Valid Sudoku
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let len = board.length;
    let vert = new Set();
    let hor = new Set();
    let square = new Set();
    let row, col, box;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            col = board[i][j];
            row = board[j][i];
            
            // box row * 3 + inner row. Same for col.
            let innerRow = (i % 3) * 3 + (j % 3);
            let innerCol = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            box = board[innerRow][innerCol];
            
            if (col !== ".") {
                if (vert.has(col)) return false;
                vert.add(col);
            }
            if (row !== ".") {
                if (hor.has(row)) return false;
                hor.add(row);
            }

            if (box !== ".") {
                if (square.has(box)) return false;
                square.add(box);
            }
        }
        vert.clear();
        hor.clear();
        square.clear();
    }
    return true;
};