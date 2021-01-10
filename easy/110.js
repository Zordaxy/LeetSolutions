// 110. Balanced Binary Tree
// Given a binary tree, determine if it is height-balanced.
// For this problem, a height-balanced binary tree is defined as:
// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

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
 * @return {boolean}
 */
var isBalanced = function(root) {   
    let check = node => {
        if(!node) return 0;
        let left = check(node.left);
        if (left === -1) return -1;
        
        let right = check(node.right);
        if (right === -1) return -1;
        
        if (Math.abs(left - right) > 1) return -1;
        return Math.max(left, right) + 1;
    }
    
    return check(root) !== -1;
};