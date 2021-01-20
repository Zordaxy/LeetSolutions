// 1235. Maximum Profit in Job Scheduling
// We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].
// You're given the startTime , endTime and profit arrays, you need to output the maximum profit you can take such that there are no 2 jobs in the subset with overlapping time range.
// If you choose a job that ends at time X you will be able to start another job that starts at time X.

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
    // populate works in form [start, end, profit]. Sort by end.
    let works = [];
    for (let i = 0; i < startTime.length; i++) {
        works.push({
            start: startTime[i],
            end: endTime[i],
            profit: profit[i]
        });
    }
    works.sort((a, b) => a.end - b.end);

    let len = startTime.length;
    let dp = [works[0].profit];

    // For each job we populate either first previous fitted job or prev value (means nothing is changed)
    for (let i = 1; i < len; i++) {
        let curProfit = works[i].profit;
        for (let j = i - 1; j >= 0; j--) {
            if (works[j].end <= works[i].start) {
                curProfit += dp[j];
                break;
            }
        }
        dp[i] = Math.max(curProfit, dp[i - 1]);
    }
    return dp[len - 1];
};
console.log(jobScheduling([1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60]));