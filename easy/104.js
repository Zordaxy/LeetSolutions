// 104. Maximum Depth of Binary Tree
// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    return bfsNoRecursion(root);
};

function dfsRecursion(root) {
    let dfs = (x, depth) => {
        if (!x) return depth;
        return Math.max(dfs(x.left, depth + 1), dfs(x.right, depth + 1));
    }
    return dfs(root, 0);
}

function bfsNoRecursion(root) {
    let queue = [];
    if (root) queue.push(root);
    let depth = 0;
    
    while(queue.length) {
        let len = queue.length;
        depth++;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return depth;
}