// 219. Contains Duplicate II
// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // Alternative is to store indices in map and compare difference between index and current position
    let start = 0;
    let end = Math.min(k, nums.length - 1);
    let set = new Set();
    
    for (let i = 0; i <= end; i++) {
        if (set.has(nums[i])) return true;
        set.add(nums[i]);
    }
    
    while(end < nums.length - 1) {
        set.delete(nums[start]);
        start++;
        end++;
        if (set.has(nums[end])) return true;
        set.add(nums[end]);
    }
    return false;
};