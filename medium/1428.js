// 1428. Leftmost Column with at Least a One
// A row-sorted binary matrix means that all elements are 0 or 1 and each row of the matrix is sorted in non-decreasing order.

// Given a row-sorted binary matrix binaryMatrix, return the index (0-indexed) of the leftmost column with a 1 in it. If such an index does not exist, return -1.
// You can't access the Binary Matrix directly. You may only access the matrix using a BinaryMatrix interface:
// BinaryMatrix.get(row, col) returns the element of the matrix at index (row, col) (0-indexed).
// BinaryMatrix.dimensions() returns the dimensions of the matrix as a list of 2 elements [rows, cols], which means the matrix is rows x cols.
// Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer. Also, any solutions that attempt to circumvent the judge will result in disqualification.
// For custom testing purposes, the input will be the entire binary matrix mat. You will not have access to the binary matrix directly.

/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    return cutRowsCols(binaryMatrix);
};

function cutRowsCols(binaryMatrix) {
    // cut rows and columns one by one O(M + N)
    let [rowCount, colCount] = binaryMatrix.dimensions();
    let row = 0;
    let col = colCount - 1;
    
    while (row < rowCount && col >= 0) {
        if (binaryMatrix.get(row, col)) {
            col--;
        } else {
            row++;
        }
    }
    return col !== colCount - 1 ? col + 1 : -1;
}

function binarySearch(binaryMatrix) {
    // Binary search O(NlogN)
    let [rowCount, colCount] = binaryMatrix.dimensions();
    let colStates = Array.from(Array(rowCount).keys());
    
    // take last row index
    rowCount--;
    colCount--;
    
    let lo = 0, hi = colCount;
    
    let hasOnes = ind => {
        let filtered = colStates.filter(row => binaryMatrix.get(row, ind) === 1);
        if (filtered.length !== 0) colStates = filtered;
        return filtered.length !== 0;
    }
    
    while(lo < hi) {
        let mid = Math.floor((hi - lo)/2 + lo);
        if (!hasOnes(mid)) {
            lo = mid + 1;
        } else if(!hasOnes(mid - 1)) {
            return mid;
        } else {
            hi = mid;
        }
    }
    
    if (binaryMatrix.get(rowCount, lo) === 1) return lo;
    return -1;
}