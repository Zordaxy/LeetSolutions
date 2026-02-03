// 628. Maximum Product of Three Numbers
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    // Max value is based either 3 max positive or 2 min negative and max positive.
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;
    let min1 = Infinity;
    let min2 = Infinity;

    for (let num of nums) {
        if (num > max1) {
            [max1, max2, max3] = [num, max1, max2];
        } else if (num > max2) {
            [max2, max3] = [num, max2];
        } else if (num > max3) {
            max3 = num;
        }

        if (num < min2) {
            [min2, min1] = [num, min2];
        } else if (num < min1) {
            min1 = num;
        }
    }

    return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};