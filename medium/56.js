// 56. Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [];
    let first = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        let second = intervals[i];
        if (first[1] >= second[0]) {
            first = [first[0], Math.max(first[1], second[1])];
        } else {
            result.push(first);
            first = second;
        }
    }
    result.push(first);
    
    return result;
};