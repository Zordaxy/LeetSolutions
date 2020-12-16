// 42. Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let counter = 0;
    let layer = getEscalationLayer(height);
    for (let i = 0; i < height.length; i++) {
        if (height[i] < layer[i]) counter += layer[i] - height[i];
    }
    return counter;
};

function getEscalationLayer(height) {
    let start = 0;
    let end = height.length - 1;
    
    let layer = new Array(height.length);
    let level = 0;
    
    while (start < end) {
        while (height[start] <= level && start < end) {
            layer[start] = level;
            start++;
        }
        while (height[end] <= level && start < end) {
            layer[end] = level;
            end--;
        }
        level++;
    }
    return layer;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]), trap([4,2,0,3,2,5]));