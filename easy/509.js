// 509. Fibonacci Number
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.
// Given N, calculate F(N).

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let cache = new Map();
    
    let getFib = n => {
        if (n <= 1) return n;
        if (cache.has(n)) return cache.get(n);
        
        let fibb = getFib(n - 1) + getFib(n - 2);
        cache.set(n, fibb);
        return fibb;
    }
    
    return getFib(N);
};