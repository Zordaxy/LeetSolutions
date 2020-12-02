// 652. Find Duplicate Subtrees
// Given the root of a binary tree, return all duplicate subtrees.
// For each kind of duplicate subtrees, you only need to return the root node of any one of them.
// Two trees are duplicate if they have the same structure with the same node values.

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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let map = new Map();

    let traverse = (node) => {
        if (!node) return "#";
        let tree = "";
        
        // dfs post order traversal
        tree = `${node.val}.${traverse(node.left)}.${traverse(node.right)}`;

        if (!map.has(tree)) {
            map.set(tree, [node]);
        } else {
            map.get(tree).push(node);
        }
        return tree;
    }
    
    traverse(root);
    return [...map.values()].filter(x => x.length > 1).map(x => x[0]);
};