// 5. Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.

/**
 * For each index check elements to the right and to the left
 * Check for middle as char and for middle as 2 chars
 */
var longestPalindrome = function(s) {
    if (!s || s.length <= 1) {
        return s;
    }
    let max = '';
    let current;
    for (let i = 0; i < s.length; i++) {
        current = expand(s, i, i);
        if (current.length > max.length) {
            max = current;
        }
        
        current = expand(s, i, i+1);
        if (current.length > max.length) {
            max = current;
        }
    }
    
    return max;
};

const expand = (s, start, end) => {
    while (start >=0 && end < s.length && s[start] === s[end]) {
        start--;
        end++;
    }
    return s.substring(start + 1, end);
}