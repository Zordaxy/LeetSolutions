// 84. Largest Rectangle in Histogram
// Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if (!heights) return 0;
    if (heights.length === 1) return heights[0];
    
    // populate array of first left smaller bar
    let leftSmaller = new Array(heights.length);
    for (let i = 0; i < heights.length; i++) {
        let l = i - 1;
        while (heights[l] >= heights[i]) {
            if (l < 0) break;
            l = leftSmaller[l];
        }
        leftSmaller[i] = l;
    }
    // populate array of first right smaller bar
    let rightSmaller = new Array(heights.length);
    for (let i = heights.length - 1; i >= 0; i--) {
        let r = i + 1;
        while (heights[r] >= heights[i]) {
            if (r >= heights.length) break;
            r = rightSmaller[r];
        }
        rightSmaller[i] = r;
    }
    let max = 0;
    for (let i = 0; i < heights.length; i++) {
        let area = (rightSmaller[i] - leftSmaller[i] - 1) * heights[i];
        max = Math.max(max, area);
    }
    
    return max;
};