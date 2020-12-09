// 285. Inorder Successor in BST
// Given a binary search tree and a node in it, find the in-order successor of that node in the BST.
// The successor of a node p is the node with the smallest key greater than p.val.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
    let curr = root;
    let stack = [];
    let isMet = false;

    // Iterative InOrder traversal
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        if (isMet) return curr;

        if (curr.val === p.val) isMet = true;

        curr = curr.right;
    }
    return null;
};