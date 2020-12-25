// 332. Reconstruct Itinerary
// Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.
// Note:
// If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// All airports are represented by three capital letters (IATA code).
// You may assume all tickets form at least one valid itinerary.
// One must use all the tickets once and only once.

// Eulerian path
// Reversed DFS Postorder O(E + V)
var findItinerary = function(tickets) {
    let map = new Map();
    for (let i = 0; i < tickets.length; i++) {
        let [dest, arr] = tickets[i];
        if (!map.has(dest)) {
            map.set(dest, [arr]);
        } else {
            map.get(dest).push(arr);
        }
        if (!map.has(arr)) map.set(arr, []);
    }
    map.forEach((value, key) => value.sort((a, b) => a < b ? -1 : 1));
    let path = [];
    
    let dfs = node => {
        let children = map.get(node);
        while(children.length) dfs(children.shift());
        path.push(node);
    }
    dfs('JFK');
    
    return path.reverse();
};

// Eulerian path
// With Backtracking.
// O(E^d) where E is the number of total flights and dd is the maximum number of flights from an airport.
var withBacktracking = function(tickets) {
    // populate adj
    let map = new Map();
    let size = 1;
    for (let i = 0; i < tickets.length; i++) {
        let edge = new Edge(tickets[i][1]);
        if (!map.has(tickets[i][0])) {
            map.set(tickets[i][0], [edge]);
            size++;
        } else {
            map.get(tickets[i][0]).push(edge);
            size++;
        }
        if (!map.has(tickets[i][1])) map.set(tickets[i][1], []);
    }
    map.forEach((value, key) => value.sort((a, b) => a.to < b.to ? -1 : 1));

    let path = ["JFK"];
    // size = [...map.values()].reduce((acc, val) => acc + val.length, 1);
    
    // searching the path
    // Eulerian path Hierholzer's algorithm
    let backtrack = node => {
        if (path.length === size) return true;
        
        let edges = map.get(node)
        for (let i = 0; i < edges.length; i++) {
            let edge = edges[i];
            if (!edge.visited) {
                path.push(edge.to)
                edge.visited = true;
                let res = backtrack(edge.to);
                if (res) return true;
                edge.visited = false;
                path.pop();
            }
        }

        return false;
    }
    let result = backtrack("JFK");
    if (!result) return [];
    return path;
};

class Edge {
    visited = false;
    constructor(to)  {
        this.to = to;
    }
}

console.log(findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]])); // [ 'JFK', 'MUC', 'LHR', 'SFO', 'SJC' ]
console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]])); // ["JFK","ATL","JFK","SFO","ATL","SFO"]
