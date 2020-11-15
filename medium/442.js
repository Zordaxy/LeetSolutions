// 442. Find All Duplicates in an Array
// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
// Find all the elements that appear twice in this array.
// Could you do it without extra space and in O(n) runtime?

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    if (!nums || !nums.length) {
        return [];
    }
    let result = new Set();
    let n = nums.length;
    
    for (let i = 0; i < n; i++) {
        while(nums[i] !== i+1 && nums[i] !== nums[nums[i] - 1]) {
            // swap
            let temp = nums[i];
            nums[i] = nums[temp - 1];
            nums[temp - 1] = temp;
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            result.add(nums[i]);
        }
    }
    return [...result];
};