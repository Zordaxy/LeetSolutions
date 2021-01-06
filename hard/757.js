// 757. Set Intersection Size At Least Two
// An integer interval [a, b] (for integers a < b) is a set of all consecutive integers from a to b, including a and b.
// Find the minimum size of a set S such that for every integer interval A in intervals, the intersection of S with A has a size of at least two.

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function (intervals) {
    intervals.sort((a, b) => a[1] !== b[1] ? a[1] - b[1] : b[0] - a[0]);
    console.log(intervals)
    let right = intervals[0][1];
    let left = intervals[0][1] - 1;
    let result = 2;

    for (let i = 1; i < intervals.length; i++) {
        let [start, end] = intervals[i];

        if (start <= left) continue;
        if (start <= right) {
            result++;
            console.log("++", i, left, right)
            left = right;
            right = end;
        } else {
            result += 2;
            console.log("++ ++", i, left, right)
            right = end;
            left = right - 1;
        }
    }
    return result;
};

console.log(intersectionSizeTwo([[1,3],[3,7],[5,7],[7,8]]));
// console.log(intersectionSizeTwo([[4,7],[5,8],[7,9],[2,6],[0,1],[1,4],[1,9],[0,5],[5,10],[7,8]])); // 6