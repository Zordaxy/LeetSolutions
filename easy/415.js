// 415. Add Strings
// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:
// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let isPassed = false;
    let arr1 = num1.split('');
    let arr2 = num2.split('');
    let result = [];
    
    while (arr1.length || arr2.length || isPassed) {
        let sum = (+arr1.pop() || 0) + (+arr2.pop() || 0) + (isPassed ? 1 : 0);
        isPassed = sum >= 10;
        result.unshift(sum % 10);
    }
    return result.join('');
};