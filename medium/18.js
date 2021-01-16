// 18. 4Sum
// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
// Notice that the solution set must not contain duplicate quadruplets.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (nums.length < 4) return [];

    let result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let sum = target - nums[i] - nums[j];
            // two pointers
            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                if (sum === nums[left] + nums[right]) {
                    // skip 3 and 4 duplicates
                    while (nums[left] === nums[left + 1]) left++;
                    while (nums[right] === nums[right - 1]) right--;

                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                    continue;
                }

                if (sum > nums[left] + nums[right]) {
                    left++;
                } else {
                    right--;
                }
            }
            // skip 2 duplicates. After action - to jump to next distinct value
            while (nums[j] === nums[j + 1]) j++;
        }
        // skip 1 duplicates.
        while (nums[i] === nums[i + 1]) i++;
    }
    return result;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // [ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]