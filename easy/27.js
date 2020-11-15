// 27. Remove Element
// Given an array nums and a value val, remove all instances of that value in-place and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (!nums, nums.length === 0) {
        return 0;
    }
    
    return withRestructure(nums, val);
};

const withSwapping = (nums, val) => {
    let right = nums.length - 1;
    let left = 0;
    let counter = 0;
    let swap = (a, b) => {
        let temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
    
    while(left <= right) {
        while (nums[left] !== val && left <= right) {
            counter++;
            left++
        }
        while(nums[right] === val && left <= right) {
            right--;
        }
        
        if (left <= right) {
            swap(left, right);
        }
    }
    return counter;
}

const withRestructure = (nums, val) => {
    let pointer = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[pointer++] = nums[i];
        }
    }
    
    return pointer;
}