// 207. Course Schedule
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.
// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let adj = new Map();
    
    // generate adj list
    for (let i = 0; i < prerequisites.length; i++) {
        let [parent, child] = prerequisites[i];
        
        if (adj.has(parent)) {
            adj.get(parent).push(child);
        } else {
            adj.set(parent, [child])
        }
        if (!adj.has(child)) adj.set(child, []);
    }
    
    // Dfs. Check for cicles
    let curPath = new Set();
    let tracked = new Set();
    let dfs = node => {
        if (curPath.has(node)) return true;
        if (tracked.has(node)) return false;
        
        curPath.add(node);
        tracked.add(node);
        
        let children = adj.get(node);
        for (let i = 0; i < children.length; i++) {
            if (dfs(children[i])) return true;
        };
        
        curPath.delete(node);
        return false;
    }
    
    for (let [v, k] of adj) {
        if (dfs(v)) return false;
    }
    return true;
};


console.log(canFinish(2, [[1, 0]])); // true
console.log(canFinish(2, [[1, 0], [0, 1]])); // false