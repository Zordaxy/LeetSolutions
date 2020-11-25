// 46. Permutations
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    let mask = new Array(nums.length);
    let chain = [];
    
    let backtrack = () => {
        if (chain.length === nums.length) {
            result.push(chain.slice());
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (!mask[i]) {
                mask[i] = true;
                chain.push(nums[i]);
                backtrack([...chain, nums[i]]);
                mask[i] = false;
                chain.pop(nums[i]);
            }
        }
    }
    
    backtrack();
    return result;
};