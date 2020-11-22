// 50. Pow(x, n)
// Implement pow(x, n), which calculates x raised to the power n (i.e. xn).

// Was implemented by recursion with division by 2 and storing "isEven"
// Erased from the Leetcode

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1;
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let mid = Math.floor(n / 2);
    let extra = n % 2 === 1 ? x : 1;
    let res = myPow(x, mid)

    return res * res * extra;
};

console.log(myPow(2, 10));
console.log(myPow(0.445, 0));