// 22. Generate Parentheses
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    return withBacktrack(n);
};

function withBacktrack(n) {
    // opens - number of "(" in answer; closes - number of ")" that still should be added
    let result = [];  

    let backtrack = (chain, opens, closes) => {
        if (!closes && opens === n) {
            result.push(chain);
            return;
        }
        if (closes) {
            backtrack(chain + ")", opens, closes - 1);
        }
        if (opens < n) {
            backtrack(chain + "(", opens + 1, closes + 1);
        }

    }
    backtrack('', 0, 0);

    return result;
}

function withIteration(n) {
    if (n <= 0) return [];
    let result = [];
    chain = [];
    let stack = [];
    stack.push(["(", 1, 1]);
    
    while(stack.length) {
        let [chain, opens, closes] = stack.pop();
        
        if (!closes && opens === n) {
            result.push(chain);
        } else {
            if (closes) {
                stack.push([chain + ")", opens, closes - 1]);
            }
            if (opens < n) {
                stack.push([chain + "(", opens + 1, closes + 1]);
            }
        }
    }
    
    return result;
}

console.log(generateParenthesis(3), generateParenthesis(1)); // [ '()()()', '()(())', '(())()', '(()())', '((()))' ] [ '()' ]