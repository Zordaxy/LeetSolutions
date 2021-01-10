// 724. Find Pivot Index
// Given an array of integers nums, write a method that returns the "pivot" index of this array.
// We define the pivot index as the index where the sum of all the numbers to the left of the index is equal to the sum of all the numbers to the right of the index.
// If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if (!nums || !nums.length) return -1;
    let sum = nums.reduce((acc, val) => acc + val, 0);
    sum -= nums[0];
    
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        if (left === sum) return i;
        left += nums[i];
        sum -= nums[i + 1] || 0;
    }
    return -1;
};