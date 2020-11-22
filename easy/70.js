// 70. Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    return noRecursion(0);
};

function noRecursion(n) {
    let mem = [1, 2];
    for (let i = 3; i <= n; i++) {
        mem[i] = mem[i - 1] + mem[i - 2];
    }
    return mem[n];
}

function byRecursion(n) {
    let mem = new Array(n);
    
    let climb = st => {
        if (st > n) return 0;
        if (st === n) return 1;
        if (mem[st]) return mem[st];
        
        let res = climb(st + 1);
        res += climb(st + 2);
        mem[st] = res;
        
        return res;
    }
    return climb(0);
}