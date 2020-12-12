// 450. Delete Node in a BST
// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.
// Basically, the deletion can be divided into two stages:
// Search for a node to remove.
// If the node is found, delete the node.
// Follow up: Can you solve it with time complexity O(height of tree)?


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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) return null;
    
    let findSuccessor = node => {
        node = node.right;
        while(node.left) node = node.left;
        return node;
    }
    
    let delInSubTree = (node, val) => {
        if (!node) return null;
        if (node.val === val) {
            // case with single child
            // case with no children covered
            // case with 2 shildren
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            
            successor = findSuccessor(node);
            successor.right = delInSubTree(node.right, successor.val);
            successor.left = node.left;
            
            return successor;
        } else if (node.val > key) {
            node.left = delInSubTree(node.left, val);
        } else {
            node.right = delInSubTree(node.right, val);
        }
        return node;
    }
    
    return delInSubTree(root, key);
};