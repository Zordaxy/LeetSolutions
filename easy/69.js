// 69. Sqrt(x)
// Implement int sqrt(int x).
// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let lo = 0;
    let hi = x;
    while (lo < hi) {
        let mid = Math.ceil((hi - lo) / 2 + lo);
        let product = mid * mid;
        if (product <= x) {
            lo = mid;
        } else {
            hi = mid - 1;
        }
        
    }
    return lo;
};