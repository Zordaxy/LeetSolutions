// 680. Valid Palindrome II
// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let lo = 0;
    let hi = s.length - 1;
    
    checkPal = (lo, hi, tries) => {
        while (s[lo] === s[hi] && lo < hi) {
            lo++;
            hi--;
        }
        
        if (lo >= hi) return true;
        if (!tries) return false;
        tries--;
        return checkPal(lo, hi - 1, tries) || checkPal(lo + 1, hi, tries)
    }
    return checkPal(lo, hi, 1);
};