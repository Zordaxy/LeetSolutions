// 347. Top K Frequent Elements
// Given a non-empty array of integers, return the k most frequent elements.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let value = map.has(nums[i]) ? map.get(nums[i]) + 1 : 1;
        map.set(nums[i], value);
    }
    
    let buckets = [];
    for (let [key, val] of map) {
        if (!buckets[val]) buckets[val] = [];
        buckets[val].push(key);
    }
    
    let result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i]) result.push(...buckets[i]);
    }
    
    return result;
};