// 485. Max Consecutive Ones
// Given a binary array, find the maximum number of consecutive 1s in this array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    if (!nums || !nums.length) return 0;
    let curSum;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        curSum = nums[i] ? curSum + 1 : 0;
        max = Math.max(curSum, max);
    }
    return max;
};