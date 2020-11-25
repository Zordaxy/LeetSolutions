// 77. Combinations
// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
// You may return the answer in any order.

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];
    if (!n || !k) return result;
    
    let track = (start, chain) => {
        // > k as start row from 1
        if (chain.length === k){
            result.push(chain.slice());
            return;
        }
        
        for (let i = start; i <= n;  i++) {
            chain.push(i);
            track(i + 1, chain);
            chain.pop();
        }
    }
    
    track(1, []);
    return result;
};