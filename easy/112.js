// 112. Path Sum
// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    return recursive(root, sum);
};

function recursive(root, sum) {
    if (!root) return false;
    // check for leaf
    if (!root.left && !root.right && sum === root.val) return true;
    
    if (recursive(root.left, sum - root.val)) return true;
    if (recursive(root.right, sum - root.val)) return true;
    return false;
}

function iterateve(root, sum) {
    if (!root) return false;
    let stack = [[root, sum]];
    
    while(stack.length)  {
        [root, sum] = stack.pop();
        if (!root.left && !root.right && sum === root.val) return true;
        if (root.left)  stack.push([root.left, sum - root.val]);
        if (root.right) stack.push([root.right, sum - root.val]);
    }
    
    return false;
}