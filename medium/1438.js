// 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
// Given an array of integers nums and an integer limit, return the size of the longest non-empty subarray such that the absolute difference between any two elements of this subarray is less than or equal to limit.

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let minQ = [];
    let maxQ = [];
    
    let start = 0;
    let max = 0;
    
    for (let i = 0; i < nums.length; i++) {
        while (minQ.length && minQ[minQ.length - 1] > nums[i]) minQ.pop();
        while (maxQ.length && maxQ[maxQ.length - 1] < nums[i]) maxQ.pop();
        
        minQ.push(nums[i]);
        maxQ.push(nums[i]);
        
        while (maxQ[0] - minQ[0] > limit) {
            if (nums[start] === minQ[0]) minQ.shift();
            if (nums[start] === maxQ[0]) maxQ.shift();
            start++;
        }
        
        max = Math.max(max, i - start + 1);
    }
    return max;
};