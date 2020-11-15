// 785. Is Graph Bipartite?
// Given an undirected graph, return true if and only if it is bipartite.
// Recall that a graph is bipartite if we can split its set of nodes into two independent subsets A and B, such that every edge in the graph has one node in A and another node in B.
// The graph is given in the following form: graph[i] is a list of indexes j for which the edge between nodes i and j exists.  Each node is an integer between 0 and graph.length - 1.  There are no self edges or parallel edges: graph[i] does not contain i, and it doesn't contain any element twice.

var isBipartite = function(graph) {
    if (!graph || graph.length === 0) {
        return false;
    }
    let result = true;
    
    let group = [];
    let dfs = x => {
        for (let adj of graph[x]) {
            if (!group[adj]) {
                group[adj] = group[x] === 1 ? 2 : 1;
                dfs(adj);
            } else if(group[adj] === group[x]) {
                result = false;
            }
        }
    } 
    
    graph.forEach((x, index) => {
        if(!group[index]) {
            group[index] = 1;
            dfs(index);
        }
    });

    return result;
};