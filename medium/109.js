// 109. Convert Sorted List to Binary Search Tree
// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (!head) return null;
    let node = head;
    let size = 0;
    while(node) {
        node = node.next;
        size++;
    }
    
    let genTree = (lo, hi) => {
        if (lo > hi) return null;
        let mid = Math.floor((hi - lo)/2 + lo);

        let left = genTree(lo, mid - 1);
        let root = new TreeNode(head.val);
        head = head.next;
        root.right = genTree(mid + 1, hi);
        root.left = left;
        
        return root;
    }
    
    
    return genTree(0, size - 1);
};