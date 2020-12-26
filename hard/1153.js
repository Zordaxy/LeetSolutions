// 1153. String Transforms Into Another String
//  Given two strings str1 and str2 of the same length, determine whether you can transform str1 into str2 by doing zero or more conversions.
// In one conversion you can convert all occurrences of one character in str1 to any other lowercase English character.
// Return true if and only if you can transform str1 into str2.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canConvert = function (str1, str2) {
    // points to consider:
    // 1. char should not convert to more that one other char 
    // 2. number of chars in str1 is >= then in str2 otherwise point 1 is broken
    // 3. Any loops can be broken by tmp char. Tmp char can be used if numper of distinct str2 chars < 26.
    if (str1 === str2) return true;

    let adj = new Map();
    for (let i = 0; i < str1.length; i++) {
        // char should not convert to more that one other char
        if (adj.has(str1[i]) && adj.get(str1[i]) !== str2[i]) return false;
        adj.set(str1[i], str2[i]);
    }

    return new Set(adj.values()).size < 26;
};

console.log(canConvert("abcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyza")); // false
console.log(canConvert("ab", "ba")); // true
console.log(canConvert("abcdefghijklmnopqrstuvwxyz", "bcadefghijklmnopqrstuvwxzz")); // true