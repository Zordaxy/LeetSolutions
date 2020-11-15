// 1089. Duplicate Zeros
// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written.
// Do the above modifications to the input array in place, do not return anything from your function.

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let zeros = 0;
    
    // last zero is tricky as it can require duplication or not
    let skipShift = false;
    let isLast = index => {
        return index === arr.length - zeros - 1;
    }
    
    // run from 0 to length - zeros to determine zeros
    for(let i = 0; i < arr.length - zeros; i++) {
        if (arr[i] === 0) {
            if (isLast(i)) {
                skipShift = true;
            } else {
               zeros++;
            }
        }
    }
    
    let end = arr.length - zeros;
    
    for(let i = arr.length - zeros - 1; i >= 0; i--) {
        arr[i + zeros] = arr[i];
        if (arr[i] === 0) {
            if (isLast(i) && skipShift) {
                continue;
            }
            zeros--;
            arr[i + zeros] = arr[i];
        }
    }
    return null;
};