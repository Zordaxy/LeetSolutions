// 117. Populating Next Right Pointers in Each Node II
// Given a binary tree

// struct Node {
//     int val;
//     Node *left;
//     Node *right;
//     Node *next;
//   }
//   Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
//   
//   Initially, all next pointers are set to NULL.

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    //  Constant time achieved by:
    // 1. store head oh each pevel
    // 2. cur - parent of level.
    // 3. prev - previous node in level or null
    // 4. once checked cur.left and cur.right -> use cur.next to jump to next parent
    if (!root) return null;
    let queue = [root];
    
    // Level-order traversal
    // Another approach is to establis connections in the N level from N-1 level. Like:
    // node.left.next = node.right
    // node.right.next = node.next.left
    while(queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            node.next = i !== len - 1 ? queue[0] : null;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    
    return root;
};