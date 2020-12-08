// 590. N-ary Tree Postorder Traversal
// Given an n-ary tree, return the postorder traversal of its nodes' values.
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
 * @return {number[]}
 */
var postorder = function(root) {
    if (!root) return [];
    let stack = [root];
    let res = [];
    
    while(stack.length) {
        let node = stack.pop();
        if (!node) return;
        if (node.children) {
            for (let i = 0; i < node.children.length; i++) {
                stack.push(node.children[i]);
            }
        }
        res.unshift(node.val);
    }
    return res;
};