// 494. Target Sum
// You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.
// Find out how many ways to assign symbols to make sum of integers equal to target S.

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
    return byDp(nums, S);
};

function byDp(nums, S) {
    let mem = new Array(nums.length + 1).fill(-1).map(() => new Map());

    let dp = (index, sum) => {
        if (index === nums.length) {
            return sum === 0 ? 1 : 0;
        }
        if (mem[index].has(sum)) return mem[index].get(sum);

        let result = dp(index + 1, sum - nums[index]);
        result += dp(index + 1, sum + nums[index]);
        mem[index].set(sum, result);

        return result;
    }

    return dp(0, S);
}

function byStack(nums, S) {
    let stack = [{ ind: 0, sum: 0 }];
    let len = nums.length;
    let count = 0;

    while (stack.length) {
        let entry = stack.pop();
        if (entry.ind !== len) {
            stack.push({ ind: entry.ind + 1, sum: entry.sum + nums[entry.ind] });
            stack.push({ ind: entry.ind + 1, sum: entry.sum - nums[entry.ind] });
        } else if (entry.sum === S) {
            count++;
        }
    }
    return count;
}

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3)); // 5
console.log(findTargetSumWays([0,0,0,0,0,0,0,0,1], 1)); // 256