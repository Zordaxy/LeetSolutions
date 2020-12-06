// 454. 4Sum II
//  Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.
// To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -228 to 228 - 1 and the result is guaranteed to be at most 231 - 1.

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let map = combine(A, B);
    let result = 0;
    
    for (let c = 0; c < C.length; c++) {
        for (let d = 0; d < D.length; d++) {
            if (map.has(C[c] + D[d])) {
                result += map.get(C[c] + D[d]);
            }
        }
    }
    
    return result;
};

function combine(A, B) {
    let map = new Map();
    for (let a = 0; a < A.length; a++) {
        for (let b = 0; b < B.length; b++) {
            let sum = A[a] + B[b];
            let count = map.get(-sum) ? map.get(-sum) + 1 : 1;
            map.set(-sum, count);
        }
    }
    return map;
}

let input = [
    [-1,-1],
    [-1,1],
    [-1,1],
    [1,-1]
];
console.log(fourSumCount(...input));