// 220. Contains Duplicate III
// Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {

    let map = new Map();
    let getHash = num => t !== 0 ? Math.floor(num / t) : nums;
    for (let i = 0; i < nums.length; i++) {
        let hash = getHash(nums[i]);
        if (map.has(hash)) return true;
        if (map.has(hash - 1)) {
            // Subtract for Math.abs
            // Compare with nums[i] instead of map.get(hash)
            // Do not keep cur element in mat
            let diff = Math.abs(map.get(hash - 1) - nums[i]);
            if (diff <= t) return true;
        }
        if (map.has(hash + 1)) {
            
            let diff = Math.abs(map.get(hash + 1) - nums[i]);
            if (diff <= t) return true;
        }

        map.set(hash, nums[i]);
        if (map.size > k) map.delete(getHash(nums[i - k]));
    }
    return false;
};

console.log(containsNearbyAlmostDuplicate([1, 2, 1, 1], 1, 0)); // true;
console.log(containsNearbyAlmostDuplicate([8, 7, 15, 1, 6, 1, 9, 15], 1, 3)); // true;
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3)); // false;