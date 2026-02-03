// 366. Find Leaves of Binary Tree
// Given a binary tree, collect a tree's nodes as if you were doing this: Collect and remove all leaves, repeat until the tree is empty.

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
 * @return {number[][]}
 */
var findLeaves = function (root) {
    // 1. calculate height for each node
    // 2. push to result by index of height
    let res = [];

    let getHeight = node => {
        if (!node) return -1;
        let height = 1 + Math.max(getHeight(node.left), getHeight(node.right));
        if (!res[height]) res[height] = [];
        res[height].push(node.val);
        return height;
    }
    getHeight(root);
    return res;
};