// 387. First Unique Character in a String
// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map();
    
    for(let i = 0; i < s.length; i++) {
        let value = map.get(s[i]) ? map.get(s[i]) + 1 : 1;
        map.set(s[i], value);
    }
    
    for(let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) return i;
    }
    return -1;
};