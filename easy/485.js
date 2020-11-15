// 485. Max Consecutive Ones
// Given a binary array, find the maximum number of consecutive 1s in this array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    if (!nums || nums.length ===  0) {
        return 0;
    }
    let state = false;
    let counter;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            counter = state ? counter + 1 : 1;
            if (counter > max){
                max = counter;
            }
        }
        state = nums[i];
    }
    return max;
};