// 88. Merge Sorted Array
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (!nums1 && !nums2) {
        return [];
    }
    let resultIndex = nums1.length - 1;
    let i = m - 1;
    let j = n - 1;
    
    // compare last elements in arrays and ser to result array
    while (resultIndex >= 0) {
        if (i < 0) {
            nums1[resultIndex--] = nums2[j--];
        } else if (j < 0) {
            nums1[resultIndex--] = nums1[i--];
        } else if (nums2[j] > nums1[i]) {
            nums1[resultIndex--] = nums2[j--];
        } else {
            nums1[resultIndex--] = nums1[i--];
        }
    }
    
    return nums1;
};