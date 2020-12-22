// 680. Valid Palindrome II
// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let lo = 0;
    let hi = s.length - 1;
    
    while (s[lo] === s[hi] && lo < hi) {
        lo++;
        hi--;
    }
    
    checkPal = (lo, hi) => {
        while (s[lo] === s[hi] && lo < hi) {
            lo++;
            hi--;
        }
        return lo >= hi;
    }
    
    return(checkPal(lo, hi - 1) || checkPal(lo + 1, hi));
};