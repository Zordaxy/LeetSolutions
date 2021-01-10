// 367. Valid Perfect Square
// Given a positive integer num, write a function which returns True if num is a perfect square else False.
// Follow up: Do not use any built-in library function such as sqrt.

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let hi = num;
    let lo = 1;
    
    while(lo <= hi) {
        let mid = Math.floor((hi - lo) / 2 + lo);
        let product = mid * mid;
        if (product === num) {
            return true;
        } else if (product > num) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return false;
};