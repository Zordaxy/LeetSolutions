// 399. Evaluate Division
// You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.
// You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.
// Return the answers to all queries. If a single answer cannot be determined, return -1.0.
// Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let graph = new Graph();
    let marked;
    let output = [];
        
    // build directed graph with mirror division weights for each edge. Like A -> B (2.0) but B -> A (0.5)
    // Map adjacency list with arrays for adjacent edges. Edges are separate objects to handle weight.
    for (let i = 0; i < equations.length; i++) {
        let left = equations[i][0];
        let right = equations[i][1]; 
        
        graph.addEdge(left, new Edge(right, values[i]));
        graph.addEdge(right, new Edge(left, 1/values[i]));
    }
    
    // For each query run dfs and push to output
    for (let i = 0; i < queries.length; i++) {
        let left = queries[i][0];
        let right = queries[i][1];
        
        let size = graph.findSize(queries[i][0], queries[i][1], 1);
        output.push(size);
    }
    
    return output;
};

class Edge {
    constructor(right, weight)  {
        this.right = right;
        this.weight = weight;
    }
}

class Graph {
    graph = new Map();
    marked;
    
    addEdge(start, edge) {
        if (this.graph.has(start)) {
            this.graph.get(start).push(edge);
        } else {
            this.graph.set(start, [edge]);
        }
    }
    
    // runs dfs starting from size 1 as size is being multiplied
    findSize(node, target) {
        if (!this.graph.has(node) || !this.graph.has(target)) {
            return -1.0;
        }
        
        this.marked = new Map();
        let result = this.dfs(node, target, 1);
        return result === null ? -1.0 : result;
    }
    
    // Dfs with path length detection
    dfs(node, target, size) {
        if (node === target) {
            return size;
        }
        this.marked.set(node, true);
        if (!node || !this.graph.has(node)) {
            return;
        }
        let adj = this.graph.get(node);
        
        for (let i = 0; i < adj.length; i++) {
            let edge = adj[i]
            if (!this.marked.get(edge.right)) {
                let result = this.dfs(edge.right, target, size * edge.weight);
                if (result !== null) {
                    return result;
                }
            }
        }
        return null;
    }
}