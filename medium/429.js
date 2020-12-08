// 429. N-ary Tree Level Order Traversal
// Given an n-ary tree, return the level order traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    let queue = [root];
    let res = [];
    
    while(queue.length) {
        let len = queue.length;
        let level = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (!node) return;
            level.push(node.val);
            if (node.children) {
                for (let j = 0; j < node.children.length; j++) {
                    queue.push(node.children[j]);
                }
            }
        }
        res.push(level);
    }
    return res;
};