// 4. Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// Follow up: The overall run time complexity should be O(log (m+n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // Set first array as smaller
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

    let n = nums1.length; // smaller
    let m = nums2.length; // bigger

    let lo = 0;
    let hi = n;
    let k = Math.floor((m + n - 1) / 2)

    while (lo < hi) {
        // Binary search in smaller. Bigger just adapts.
        let mid = Math.floor((lo + hi) / 2);
        let mid2 = Math.floor(k - mid);
        if (nums1[mid] > nums2[mid2]) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }

    // handle elements: nums1[lo - 1], nums1[lo] and nums2[k - lo], nums2[k - lo + 1]
    let left1 = lo > 0 ? nums1[lo - 1] : -Infinity;
    let left2 = k - lo >= 0 ? nums2[k - lo] : -Infinity;
    let left = Math.max(left1, left2);
    // retern mid element if total is odd
    if ((m + n) % 2 === 1) return left;

    let right1 = lo === n ? Infinity : nums1[lo];
    let right2 = k - lo + 1 === m ? Infinity : nums2[k - lo + 1];
    let right = Math.min(right1, right2);

    // console.log(left, right, right1, right2);
    // return difference if total is even
    return (left + right) / 2;
};