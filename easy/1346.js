// 1346. Check If N and Its Double Exist
// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
// More formally check if there exists two indices i and j such that :
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    if (!arr || !arr.length) return false;
    
    let map = new Map();
    for(let i = 0; i < arr.length; i++) {
        // Important!: check both cases arr[i]*2 and arr[i]/2
        if (map.has(arr[i]*2) || map.has(arr[i]/2)) return true;
        map.set(arr[i]);
    }
    return false;
};