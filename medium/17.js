// 17. Letter Combinations of a Phone Number
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits || !digits.length) return [];
    
    let result = [];
    let map = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']]
    ]);
    
    let backtrack = (index, comb) => {
        if(index === digits.length) {
            result.push(comb);
            return;
        }
        
        let letters = map.get(digits[index]);
        if (letters) {
            for (let j = 0; j < letters.length; j++) backtrack(index + 1, comb + letters[j]);
        }
    }
    
    backtrack(0, "");
    return result;
};