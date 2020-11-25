// 100. Same Tree
// Given two binary trees, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let check = (P, Q) => {
        if (P === null && Q === null) return true;
        if (P === null || Q === null) return false;
        return P.val === Q.val;
    }
    
    let queue = [p, q];
    
    while(queue.length) {
        let Q = queue.pop();
        let P = queue.pop();
        
        if (!check(P, Q)) return false;
        if (P) {
            if (!check(P.left, Q.left)) return false;
            if (!check(P.right, Q.right)) return false;
        }
    }
    return true;
};