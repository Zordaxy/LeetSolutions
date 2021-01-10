// 459. Repeated Substring Pattern
// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let mid = Math.floor(s.length / 2);
    for (let i = 0; i <= mid; i++) {
        if (s.length % i !== 0) continue;
        if (s.slice(0, i).repeat(s.length / i) === s) return true;
    }
    return false;
};