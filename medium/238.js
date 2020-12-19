// 238. Product of Array Except Self
// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
// Example:
// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.
// Note: Please solve it without division and in O(n).

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // two arrays to handle left product and right product
    let left = [1]
    let right = new Array(nums.length);
    right[nums.length - 1] = 1;
    let result = [];
    
    for (let i = 0; i < nums.length - 1; i++) left[i + 1] = left[i] * nums[i];
    for (let i = nums.length - 1; i > 0; i--) right[i - 1] = right[i] * nums[i];
    result[0] = result[1];
    result[nums.length - 1] = left[nums.length - 2]
    
    for (let i = 0; i < nums.length; i++) {
        result[i] = right[i] * left[i];
    }
    
    return result;
};