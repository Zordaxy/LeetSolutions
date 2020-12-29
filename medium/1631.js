// 1631. Path With Minimum Effort
// You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.
// A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.
// Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    let adj = [];
    let length = heights[0].length;
    let max = 0;
    
    let pushIfExists = (i, j, arr, parent) => {
        if (i >= 0 && i < heights.length && j >= 0 && j < length) {
            let ind = i * length + j;
            let delta = Math.abs(parent - heights[i][j]);
            max = Math.max(max, delta);
            arr.push([ind, delta]);
        }
    }
    
    // build adjacency list
    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < heights[0].length; j++) {
            let ind = i * length + j;
            let arr = [];
            
            pushIfExists(i - 1, j, arr, heights[i][j]);
            pushIfExists(i + 1, j, arr, heights[i][j]);
            pushIfExists(i, j + 1, arr, heights[i][j]);
            pushIfExists(i, j - 1, arr, heights[i][j]);
            
            adj[ind] = arr;
        }
    }
    
    // DFS
    let checkSolution = threshold => {
        let visited = new Array(adj.length);
        let stack = [adj[0]];
        visited[0] = true;
        while(stack.length) {
            let children = stack.pop();
            for (let i = 0; i < children.length; i++){
                let [ind, effort] = children[i];
                if (!visited[ind] && effort <= threshold) {
                    if (ind === adj.length - 1) return true;
                    visited[ind] = true;
                    stack.push(adj[ind]);
                }
            }
        }
        return false;
    }
    
    let lo = 0;
    let hi = max;
    
    // Binary search
    while (lo < hi) {
        let med = Math.floor((hi + lo)/2);
        let works = checkSolution(med);
        if (!works) {
            lo = med + 1;
        } else {
            hi = med;
        }
    }
    return lo;
};

console.log(minimumEffortPath([[1,2,2],[3,8,2],[5,3,5]]));
console.log(minimumEffortPath([[1,2,3],[3,8,4],[5,3,5]]));