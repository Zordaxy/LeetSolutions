// 31. Next Permutation
// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
// If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).
// The replacement must be in place and use only constant extra memory.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let swap = (a, b) => [nums[a], nums[b]] = [nums[b], nums[a]];
    let last = nums.length - 1;

    // 5, 7, 6, 4 => 6, 7, 5, 4 => 6, 4, 5, 7

    for (let i = last; i > 0; i--) {
        // find first place where prev < next
        if (nums[i] > nums[i - 1]) {
            let firstBigger = nums.length - 1;

            // swat prev with first bigger from the right
            while (nums[firstBigger] <= nums[i - 1]) firstBigger--;
            swap(i - 1, firstBigger);

            // reverse array starting from i (next).
            let lo = i;
            let hi = last;
            while (lo < hi) {
                swap(lo, hi);
                lo++;
                hi--;
            }
            return nums;
        }
    }
    return nums.reverse();
};