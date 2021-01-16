// 33. Search in Rotated Sorted Array
// You are given an integer array nums sorted in ascending order, and an integer target.
// Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// If target is found in the array return its index, otherwise, return -1.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;
    
    let binarySearch = (lo, hi) => {
        while (lo <= hi) {
            let mid = Math.floor((hi - lo) / 2 + lo);
            if (nums[mid] === target) return mid;
            if (nums[mid] > target) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        return -1;
    }
    
    while (lo <= hi) {
        let mid = Math.floor((hi - lo) / 2 + lo);
        if (nums[mid] === target) return mid;
        // rotation is in right
        if (nums[mid] >= nums[lo]) {
            if (target >= nums[lo] && target < nums[mid]) {
                // simple binary search
                return binarySearch(lo, mid - 1);
            } else {
                lo = mid + 1;
            }
        // rotation to the left
        } else {
            if (target > nums[mid] && target <= nums[hi]) {
                // simple binary search
                return binarySearch(mid + 1, hi);
            } else {
                hi = mid - 1;
            }
        }
    }
    return -1;
};