// 189. Rotate Array
// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Follow up:
// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let reverse = (lo, hi) => {
        while (lo < hi) {
            [nums[lo], nums[hi]] = [nums[hi], nums[lo]];
            lo++;
            hi--;
        }
    }

    k %= nums.length;
    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);

    return nums;
};