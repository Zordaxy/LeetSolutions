// 133. Clone Graph
// Given a reference of a node in a connected undirected graph.
// Return a deep copy (clone) of the graph.
// Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.
// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;

    let visited = [];
    // With recursion
    const withRecursion = curr => {
        if (visited[curr.val]) return visited[curr.val];

        let clone = new Node(curr.val);
        visited[curr.val] = clone;
        
        for (let i = 0; i < curr.neighbors.length; i++) {
            clone.neighbors.push(withRecursion(curr.neighbors[i]));
        }
        return clone;
    }
    
    // With stack
    const withStack = () => {
        let stack = [node];
        
        // generate nodes
        while(stack.length) {
            let curr = stack.pop();
            if (visited[curr.val]) continue;
        
            let clone = new Node(curr.val);
            visited[curr.val] = clone;
            
            for (let i = 0; i < curr.neighbors.length; i++) {
                let neib = curr.neighbors[i];
                
                if (!visited[neib.val]) stack.push(neib);
            }
        }
        
        // populate neighbors array
        stack.push(node);
        while(stack.length) {
            let curr = stack.pop();
            let clone = visited[curr.val];
            if (clone.neighbors.length > 0) continue;
            
            for (let i = 0; i < curr.neighbors.length; i++) {
                let clonedNeib = visited[curr.neighbors[i].val];
                clone.neighbors.push(clonedNeib);
                stack.push(curr.neighbors[i]);
            }
        }
        return visited[1];
    }
    
    return withRecursion(node);
};