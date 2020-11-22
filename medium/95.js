// 95. Unique Binary Search Trees II
// Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (n <=  0) return [];
    return buildTree(1, n);
};

function buildTree(start, end) {
    let list = [];

    for (let ind = start; ind <= end; ind++) {
        for (let lNode of buildTree(start, ind - 1)) {
            for (let rNode of buildTree(ind + 1, end)) {
                let node = new TreeNode(ind);
                node.left = lNode;
                node.right = rNode;
                list.push(node);
            }
        }
    }

    return list.length ? list : [null];
}

console.log(generateTrees(3), generateTrees(3).length);