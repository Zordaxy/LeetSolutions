// 279. Perfect Squares
// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    return bfs(n);
}

// Dynamic programming
function dynamicProgramming(n) {
    if (n <= 3) return n;

    // Check every possible combination. Memory array reduces from Exponential to quadratic.
    let dp = [0, 1, 2, 3];
    for (let i = 4; i <= n; i++) {
        dp[i] = i;

        for (let j = 1; j * j <= i; j++) {
            let mult = j * j;
            dp[i] = Math.min(dp[i], 1 + dp[i - mult]);
        }
    }
    return dp[n];
};

// Breadth first search
function bfs(n) {
    if (n <= 0) return 0;
    let sqrt = Math.floor(Math.sqrt(n));
    let queue = [0];
    let mem = [];
    let count = 0;

    // Treat as graph. Go to each node that is a sum of parent + all numbers 1->sqrt(n).
    while(queue.length) {
        count++;
        let len = queue.length;
        for (let i = 0; i < len ; i++) {
            let val = queue.shift();
            for(let j = 1; j <= sqrt; j++) {
                let sum = val + j*j;
                if (sum === n) return count;
                if (sum < n && !mem[sum]) {
                    mem[sum] = true;
                    queue.push(sum);
                }
            }
        }
    }
    return null;
};



console.log(numSquares(79));
console.log(numSquares(6));
console.log(numSquares(4));
console.log(numSquares(12));