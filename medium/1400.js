// 1400. Construct K Palindrome Strings
// Given a string s and an integer k. You should construct k non-empty palindrome strings using all the characters in s.
// Return True if you can use all the characters in s to construct k palindrome strings or False otherwise.

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], 1);
        } else {
            map.set(s[i], map.get(s[i]) + 1);
        }
    }
    
    
    let singleCount = 0;
    for (let val of map.values())  {
        if (val % 2 !== 0) singleCount++;
    }
    return singleCount <= k && s.length >= k;
};