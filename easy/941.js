/**
 * 941. Valid Mountain Array
 * Given an array of integers arr, return true if and only if it is a valid mountain array.

    Recall that arr is a mountain array if and only if:

    arr.length >= 3
    There exists some i with 0 < i < arr.length - 1 such that:
    arr[0] < arr[1] < ... < arr[i - 1] < A[i]
    arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 */

/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if (!A || A.length < 3) return false;
    
    let peakPassed = false;
    for(let i = 1; i < A.length; i++) {
        if (A[i] === A[i-1]) return false;
        
        if (!peakPassed) {
            if (A[i] < A[i-1]) {
                // Important: consider case with descending order only
                if (i === 1) return false;
                peakPassed = true;
            }
        } else {
            if (A[i] > A[i-1]) return false;
        }
    }
    // Important: consider case with ascending order only
    return peakPassed;
};