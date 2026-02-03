// 698. Partition to K Equal Sum Subsets
// Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into k non-empty subsets whose sums are all equal.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    let sum = nums.reduce((acc, val) => acc + val)/k;
    if (sum % 1 !== 0) return false;
    
    
    let backtrack = (curSum, count, nextInd) => {
        if (curSum === sum) {
            curSum = 0;
            count--;
            nextInd = 0;
        }
        
        // if there are k-1 subsets with expected sum? then last has the same sum
        if (count === 0) return true;
        
        for (let i = nextInd; i < nums.length; i++) {
            if (nums[i] !== null) {
                let el = nums[i];
                
                nums[i] = null;
                if (backtrack(curSum + el, count, i + 1)) return true;
                nums[i] = el;
            }
        }
        
        return false;
    }
    
    return backtrack(0, k, 0);
};