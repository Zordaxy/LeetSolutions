// 1051. Height Checker
// Students are asked to stand in non-decreasing order of heights for an annual photo.
// Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.
// Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    if (!heights || !heights.length) {
        return 0;
    }
    let example = [...heights].sort((a, b) => a - b);
    let count = 0;
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== example[i]) {
            count++;
        }
    }
    
    return count;
};