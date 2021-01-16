// 153. Find Minimum in Rotated Sorted Array
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
// Given the sorted rotated array nums, return the minimum element of this array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let lo = 0;
    let hi = nums.length - 1;
    let start = nums[0];

    while (lo <= hi) {
        let mid = Math.floor((hi - lo) / 2 + lo);
        if (nums[mid - 1] > nums[mid]) return nums[mid];

        if (start > nums[mid]) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return nums[0];
};