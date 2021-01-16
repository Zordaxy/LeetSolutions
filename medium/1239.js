// 1239. Maximum Length of a Concatenated String with Unique Characters
// Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.
// Return the maximum possible length of s.

/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let dp = [""];
    let max = 0;
    let isUnique = str => str.length === new Set(str.split('')).size;
    
    for (let i = 0; i < arr.length; i++) {
        if (!isUnique) continue;
        let len = dp.length;
        for (let j = 0; j < len; j++) {
            let resStr = dp[j] + arr[i];
            if (isUnique(resStr)) dp.push(resStr);
        }
    }
    return dp.reduce((acc, val) => Math.max(acc, val.length), 0);
};