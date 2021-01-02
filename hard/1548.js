// 1548. The Most Similar Path in a Graph
// We have n cities and m bi-directional roads where roads[i] = [ai, bi] connects city ai with city bi. Each city has a name consisting of exactly 3 upper-case English letters given in the string array names. Starting at any city x, you can reach any city y where y != x (i.e. the cities and the roads are forming an undirected connected graph).
// You will be given a string array targetPath. You should find a path in the graph of the same length and with the minimum edit distance to targetPath.
//You need to return the order of the nodes in the path with the minimum edit distance, The path should be of the same length of targetPath and should be valid (i.e. there should be a direct road between ans[i] and ans[i + 1]). If there are multiple answers return any one of them.

/**
 * @param {number} n
 * @param {number[][]} roads
 * @param {string[]} names
 * @param {string[]} targetPath
 * @return {number[]}
 */
var mostSimilar = function (n, roads, names, targetPath) {
    // n - names length; m - targetPath length
    let m = targetPath.length

    let dp = new Array(m).fill(null).map(x => new Array(n).fill(-1));
    let prev = new Array(m).fill(null).map(x => new Array(n));
    let adjMatrix = new Array(n).fill(null).map(x => new Array(n));

    // Populate adjacency matrix
    for (let r of roads) {
        let [start, end] = r;
        adjMatrix[start][end] = true;
        adjMatrix[end][start] = true;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let count = targetPath[i] === names[j] ? 1 : 0;
            let max = -1;
            let prevNode = null;

            if (i === 0) {
                dp[i][j] = count;
                continue;
            }

            for (let c = 0; c < n; c++) {
                if (adjMatrix[j][c]) {
                    if (count + dp[i - 1][c] > max) {
                        max = count + dp[i - 1][c];
                        prevNode = c;
                    }
                }
            }
            dp[i][j] = max;
            prev[i][j] = prevNode;
        }
    }

    let lastCity = dp[m - 1];
    let ind = -1;
    let count = -1;
    for (let i = 0; i < lastCity.length; i++) {
        if (lastCity[i] > count) {
            count = lastCity[i];
            ind = i;
        }
    }

    let path = [ind];
    for (let i = m - 1; i > 0; i--) {
        ind = prev[i][ind];
        path.unshift(ind);
    }

    return path;
};