// 1299. Replace Elements with Greatest Element on Right Side
// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
// After doing so, return the array.

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if (!arr ||  !arr.length) {
        return [];
    }
    let max = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        let oldVal = arr[i];
        arr[i] = max;
        max = Math.max(oldVal, arr[i]);
    }
    return arr;
};