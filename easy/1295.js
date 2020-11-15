// 1295. Find Numbers with Even Number of Digits
// Given an array nums of integers, return how many of them contain an even number of digits.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        let length = nums[i].toString().length;
        if (length % 2 === 0) {
            counter++;
        }
    }
    return counter;
};