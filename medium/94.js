// 94. Binary Tree Inorder Traversal
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];
    return withoutRecursion(root);
};

// No recursion
// go to node.left until nude == null - do it only in case of jump to right.
// stack pop() - does not require going to node.left!
// stack tracks left direction chains
function withoutRecursion(root) {
    let stack = [];
    let result = [];
    let node = root;
    
    while(stack.length || node) {
        while(node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        result.push(node.val);
        
        node = node.right;
    }
    
    return result;
}

function withRecursion(root, result) {
    if (!root) return;
    withRecursion(root.left, result);
    result.push(root.val)
    withRecursion(root.right, result);
}