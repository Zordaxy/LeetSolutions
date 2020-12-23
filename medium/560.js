// 560. Subarray Sum Equals K
// Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map();
    let count = 0;
    let curSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        curSum += nums[i];
        if (curSum === k) count++;
        if (map.has(curSum - k)) count += map.get(curSum - k);
        
        let cur = map.get(curSum);
        if (cur) {
            map.set(curSum, cur + 1);
        } else {
            map.set(curSum, 1);
        }
    }
    
    return count;
};