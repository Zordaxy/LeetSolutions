// 119. Pascal's Triangle II
// Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.
// Notice that the row index starts from 0.


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let res = [1];

    for (let i = 1; i <= rowIndex; i++) {
        for (let j = i; j > 0; j--) {
            if (j === i) {
                res[j] = 1;
            } else {
                res[j] = res[j - 1] + res[j];
            }
        }
    }

    return res;
};