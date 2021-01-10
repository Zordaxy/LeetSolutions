// 101. Symmetric Tree
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).


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
var isSymmetric = function(root) {
    if (!root) return true;
    return byReflection(root);
};

// Preferable
function byReflection(root) {
    let queue = [root.left, root.right]

    while(queue.length) {
        let [left, right] = [queue.shift(), queue.shift()];
        if (!left && !right) continue;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;
        queue.push(right.right, left.left, right.left, left.right);
    }
    return true;
}

function byTraversal(root)  {
    if (!root.left && !root.right) return true;
    if (!root.left || !root.right) return false;
    
    let leftTraverse = node => {
        if (!node) return ["#"];
        return [node.val, leftTraverse(node.left), leftTraverse(node.right)]
    }
    
    let rightTraverse = (node, res) => {
        if (!node) return ["#"];
        return [node.val, rightTraverse(node.right), rightTraverse(node.left)]
    }
    
    return leftTraverse(root.left).join('') === rightTraverse(root.right).join('');
}