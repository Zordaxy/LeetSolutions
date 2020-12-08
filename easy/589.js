// 589. N-ary Tree Preorder Traversal
// Given an n-ary tree, return the preorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return [];
    
    return iterative(root);
    // return recursive(root, []);
};

function iterative(root) {
    let stack = [root];
    let res = [];
    
    while(stack.length) {
        let node = stack.pop();
        if (!node) return;
        res.push(node.val);
        if (node.children) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push(node.children[i]);
            }
        }
    }
    return res;
}

function recursive(root, res) {
    res.push(root.val);
    if (root.children) {
        for (let i = 0; i < root.children.length; i++) recursive(root.children[i], res);
    }
    return res;
}