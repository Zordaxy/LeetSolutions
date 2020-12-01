// 205. Isomorphic Strings
// Given two strings s and t, determine if they are isomorphic.
// Two strings are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (!s && !t) return true;
    if (!s || !t || s.length !== t.length) return false;
    let sMap = new Map();
    let tMap = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if(!sMap.has(s[i])) sMap.set(s[i], t[i]);
        if(!tMap.has(t[i])) tMap.set(t[i], s[i]);
        if (sMap.get(s[i]) !== t[i] || tMap.get(t[i]) !== s[i]) return false;
    }
    return true;
};