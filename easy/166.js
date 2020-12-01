// 136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let set = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            set.delete(nums[i])
        } else {
            set.add(nums[i])
        }
    }
    return [...set][0];
};