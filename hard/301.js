// 301. Remove Invalid Parentheses
// Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.
// Note: The input string may contain letters other than the parentheses ( and ).

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    // detect misplaced
    let left = 0;
    let right = 0;
    for (let i = 0; i < s.length; i++) {       
        if (s[i] === "(") left++;
        if (s[i] === ")")  {
            if (left > 0) {
                left--;
            } else {
                right++;
            }
        }
    }
    
    // backtrack
    let backtrack = (str, ind, lCount, rCount) => {
        if (ind > str.length) return;
        if (lCount === left && rCount === right) {
            if (isValid(str)) result.add(str.join(""));
            return;
        }
        while (str[ind] !== ")" && str[ind] !== "(" && ind <= str.length) ind++;

        if (str[ind] === "(") {
            if (lCount < left) {
                str.splice(ind, 1)
                backtrack(str, ind, lCount + 1, rCount);
                str.splice(ind, 0, "(")
            }
        } else if (str[ind] === ")") {
            if (rCount < right) {
                str.splice(ind, 1);
                backtrack(str, ind, lCount, rCount + 1);
                str.splice(ind, 0, ")")
            }
        }
        
        backtrack(str, ind + 1, lCount, rCount);

    }

    let isValid = str => {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "(") count++;
            if (str[i] === ")") {
                if (!count) return false;
                count--;
            }
        }
        return count === 0;
    }
    
    let result = new Set();
    backtrack(s.split(""), 0, 0, 0)
    return [...result];
};

// console.log(removeInvalidParentheses(")("));
console.log(removeInvalidParentheses(")()("));