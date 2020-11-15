// 15. 3Sum
// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
// Notice that the solution set must not contain duplicate triplets.

var threeSum = function (nums) {
    if (!nums || nums.length < 3) {
        return [];
    }

    // Sort O(NlogN)
    nums.sort((a, b) => a - b);

    return usingTwoPointers(nums);
    // return usingHash(nums);
};

const usingTwoPointers = nums => {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (i !== 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let start = i + 1;
        let end = nums.length - 1;

        while (start < end) {
            let sum = nums[i] + nums[start] + nums[end];
            if (sum === 0) {
                result.push([nums[i], nums[start], nums[end]]);
                start++;

                while (nums[start] === nums[start - 1] && start < end) {
                    start++
                }
            } else if (sum < 0) {
                start++;
            } else if (sum > 0) {
                end--;
            }
        }
    }
    return result;
}

const usingHash = nums => {
    let result = [];
    const len = nums.length;
    let storage = new Set();

    for (let i = 0; i < len; i++) {
        if (i != 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        // Clear storage after each j loop
        storage.clear();
        for (let j = i + 1; j < len; j++) {
            let third = -nums[j] - nums[i];

            if (storage.has(third)) {
                result.push([nums[i], nums[j], third]);
                // Skip only if present in storage
                while (nums[j + 1] === nums[j] && j + 1 < len) ++j;
            }
            storage.add(nums[j]);
        }
    }

    return result; // O(N^2)
}