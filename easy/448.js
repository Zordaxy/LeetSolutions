// 448. Find All Numbers Disappeared in an Array
// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
// Find all the elements of [1, n] inclusive that do not appear in this array.
// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    if (!nums || !nums.length) {
        // return empty array
        return [];
    }
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        //Check for duplicate in exchange position
        while (nums[i] !== i + 1 && nums[i] !== nums[nums[i] - 1]) {
            // swap
            let temp = nums[i];
            nums[i] = nums[temp - 1];
            nums[temp - 1] = temp;
        }
    }
    
    let result = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            result.push(i + 1);
        }
    }
    return result;
};