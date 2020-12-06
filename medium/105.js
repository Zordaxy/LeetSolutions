// 105. Construct Binary Tree from Preorder and Inorder Traversal
// Given preorder and inorder traversal of a tree, construct the binary tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let map = new Map();
    for (let i = 0; i < inorder.length; i++) map.set(inorder[i], i);
    let pInd = 0;
    
    let genTree = (lo, hi) => {
        if (lo > hi) return null;
        let val = preorder[pInd];
        pInd++;
        
        let node = new TreeNode(val);
        node.left = genTree(lo, map.get(val) - 1);
        node.right = genTree(map.get(val) + 1, hi);
        return node;
    }
    return genTree(0, inorder.length - 1);
};