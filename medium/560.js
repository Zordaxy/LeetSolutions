// 560. Subarray Sum Equals K
// Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    let sum = 0;
    
    let preSum = new Map();
    preSum.set(0, 1);
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        count += (preSum.get(sum - k) || 0);
        
        let preCount = preSum.get(sum) || 0;
        preSum.set(sum, preCount + 1);
    }
    
    return count;
};