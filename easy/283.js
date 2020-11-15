// 283. Move Zeroes
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (!nums || !nums.length) {
        return [];
    }
    let index = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0)  {
            nums[index] = nums[i];
            index++;
        }
    }
    for (let i = index; i < nums.length; i++){
        nums[i] = 0;
    }
    return nums;
};