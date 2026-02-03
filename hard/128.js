// 128. Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let set = new Set(nums);
    let max = 0;
    for (let entry of set) {
        if (!set.has(entry - 1)) {
            let len = 0;
            while (set.has(entry)) {
                len++;
                entry++;
            }
            max = Math.max(max, len);
        }
    }
    return max;
};