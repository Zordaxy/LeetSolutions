// 350. Intersection of Two Arrays II
// Given two arrays, write a function to compute their intersection.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = new Map();
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        let entry = map.get(nums1[i]);
        map.set(nums1[i], entry ? entry + 1 : 1);
    }
    for (let i = 0; i < nums2.length; i++) {
        let value = map.get(nums2[i]);
        if (value > 0) {
            result.push(nums2[i]);
            map.set(nums2[i], --value);
        }
    }
    
    return result;
};