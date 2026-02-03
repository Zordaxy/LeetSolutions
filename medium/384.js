// 384. Shuffle an Array
// Given an integer array nums, design an algorithm to randomly shuffle the array.
// Implement the Solution class:
// Solution(int[] nums) Initializes the object with the integer array nums.
// int[] reset() Resets the array to its original configuration and returns it.
// int[] shuffle() Returns a random shuffling of the array.

var Solution = function (nums) {
    this.nums = nums;
};

Solution.prototype.reset = function () {
    return this.nums;
};

Solution.prototype.shuffle = function () {
    let arr = this.nums.slice();
    for (let i = 0; i < arr.length; i++) {
        let j = i + Math.floor(Math.random() * (arr.length - i));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};