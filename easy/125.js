// 125. Valid Palindrome
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Note: For the purpose of this problem, we define empty string as valid palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let lo = 0;
    let hi = s.length - 1;
    s = s.toLowerCase();
    let code0 = "0".charCodeAt(0);
    let code9 = "9".charCodeAt(0);
    
    let isValid = ind => {
        let code = s.charCodeAt(ind);
        if (code >= 97 && code <= 122) return true;
        if (code >= code0 && code <= code9) return true;
        return false;
    }
    
    
    while(lo < hi) {
        if (!isValid(lo)) lo++;
        else if (!isValid(hi)) hi--
        else if (s[lo] !== s[hi]) return false;
        else {
            lo++;
            hi--;
        }
    }
    return true;
};