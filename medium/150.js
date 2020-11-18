// 150. Evaluate Reverse Polish Notation
// Evaluate the value of an arithmetic expression in Reverse Polish Notation.
// Valid operators are +, -, *, /. Each operand may be an integer or another expression.

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let operators = new Set(["+", "-", "*", "/"]);
    let stack = [];
    
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        if (operators.has(token)) {
            // do not forget to parse to number
            let [right, left] = [+stack.pop(), +stack.pop()];
            
            switch (token)  {
                case "+":
                    stack.push(left + right);
                    break;
                case "-":
                    stack.push(left - right);
                    break;
                case "*":
                    stack.push(left * right);
                    break;
                case "/":
                    // Math.floor wokrs odd with negative
                    stack.push(Math.trunc(left / right));
                    break;
            }
        } else {
            stack.push(token);
        }
    };
    //return last element
    return(stack.pop());
};

console.log(evalRPN(["2","1","+","3","*"]));
console.log(evalRPN(["4","13","5","/","+"]));
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));