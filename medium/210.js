// 210. Course Schedule II
// There are a total of n courses you have to take labelled from 0 to n - 1.
// Some courses may have prerequisites, for example, if prerequisites[i] = [ai, bi] this means you must take the course bi before the course ai.
// Given the total number of courses numCourses and a list of the prerequisite pairs, return the ordering of courses you should take to finish all courses.
// If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    let adj = new Map();

    // generate adj list
    for (let i = 0; i < prerequisites.length; i++) {
        let [parent, child] = prerequisites[i];

        if (adj.has(parent)) {
            adj.get(parent).push(child);
        } else {
            adj.set(parent, [child])
        }
    }

    let topoOrder = [];
    let tracked = new Set();
    let curPath = new Set();

    let dfs = node => {
        // onnce we checked for circle a set of nodes - we don't have to do that again
        if (curPath.has(node)) return true;
        if (tracked.has(node)) return false;

        tracked.add(node);
        curPath.add(node);

        let children = adj.get(node);
        if (children) {
            for (let i = 0; i < children.length; i++) {
                if (dfs(children[i])) return true;
            }
        }

        curPath.delete(node);
        topoOrder.push(node);
        return false;
    }

    for (let i = 0; i < numCourses; i++) {
        // dfs(i) returns true in case of existing circle
        if (dfs(i)) return [];
    }

    // No reverse as contition is about prerequisites, not dependencies
    return topoOrder;
};

console.log(findOrder(2, [[0, 1], [1, 0]])); // []
console.log(findOrder(2, [[1, 0]])); // [0,1]