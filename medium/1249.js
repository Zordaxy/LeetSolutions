// 1249. Minimum Remove to Make Valid Parentheses
// Given a string s of '(' , ')' and lowercase English characters. 
// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
// Formally, a parentheses string is valid if and only if:
// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let arr = s.split('');
    
    let checkChar = (i, forw, back) => {
        if (arr[i] === forw) count++;
        
        if (arr[i] === back) {
            if (count) {
                count--;
            } else {
                arr[i] = "";
            }
        }
    }
    
    let count = 0;
    for (let i = 0; i < arr.length; i++) checkChar(i, "(", ")");
    count = 0;
    for (let i = arr.length - 1; i >= 0; i--) checkChar(i, ")", "("); 
    
    return arr.join("");
};