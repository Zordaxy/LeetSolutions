// 704. Binary Search
// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums || !nums.length) {
        return -1;    
    }
    
    let left = 0;
    let right  = nums.length - 1;
    
    while (left <= right) {
        let median = Math.floor((left + right) / 2);
        if (nums[median] === target) {
            return median;
        } else if (nums[median] < target) {
            left = median + 1;
        } else {
            right = median - 1;
        }
    }
    
    return - 1;
};