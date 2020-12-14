// 108. Convert Sorted Array to Binary Search Tree
// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    let buildTree = (lo, hi) => {
        if (lo > hi) return null;
        let med = Math.floor((hi - lo)/2 + lo);
        let node = new TreeNode(nums[med]);
        node.left = buildTree(lo, med - 1);
        node.right = buildTree(med + 1, hi);
        return node;
    }
    return buildTree(0, nums.length - 1);
};