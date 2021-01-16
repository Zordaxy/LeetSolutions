// 658. Find K Closest Elements
// Given a sorted array arr, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    let lo = 0;
    let hi = arr.length - k;

    // Compare the distance between x - A[mid] and A[mid + k] - x
    while (lo < hi) {
        let mid = Math.floor((hi - lo) / 2 + lo);

        if (x - arr[mid] > arr[mid + k] - x) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return (arr.slice(lo, lo + k));
};