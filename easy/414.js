// 414. Third Maximum Number
// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if (!nums) {
        return 0;
    }
    let aux = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (aux.some(x => x === nums[i])) {
            continue;
        }
        aux.push(nums[i]);
        aux.sort((a, b) => b - a);
        aux.length = 3;
    }
    return aux[2] !== undefined ? aux[2] : aux[0];
};

// Another approach:
// if (nums[i] > first) {
//       [first, second, third] = [nums[i], first, second];
//     } else if (nums[i] > second) {
//       [second, third] = [nums[i], second];
//     } else if (nums[i] > third) {
//       third = nums[i];
//     }

// Another approact - quick search (but not needed)