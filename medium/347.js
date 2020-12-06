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
    
    let result = [...map.entries()];
    result.sort(([aKey, aVal], [bKey, bVal]) => bVal - aVal);
    return result.slice(0, k).map(([key,  val]) => key);
};