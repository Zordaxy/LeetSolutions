// 986. Interval List Intersections
// You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.
// Return the intersection of these two interval lists.
// A closed interval [a, b] (with a < b) denotes the set of real numbers x with a <= x <= b.
// The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
    let lInd = 0, rInd = 0;
    let res = [];

    while (lInd < A.length && rInd < B.length) {
        let [lStart, lEnd] = A[lInd];
        let [rStart, rEnd] = B[rInd];

        let maxStart = Math.max(lStart, rStart);
        let minEnd = Math.min(lEnd, rEnd);
        if (maxStart <= minEnd) res.push([maxStart, minEnd]);

        if (lEnd === minEnd) lInd++;
        if (rEnd === minEnd) rInd++;
    }
    return res;
};