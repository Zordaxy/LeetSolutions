// 24. Swap Nodes in Pairs
// Given a linked list, swap every two adjacent nodes and return its head.
// You may not modify the values in the list's nodes. Only nodes itself may be changed.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {   
    if (head && head.next) {
        let temp = head.next.next;
        let newHead = head.next;
        newHead.next = head;
        head.next = swapPairs(temp);
        
        return newHead;
    } else {
        return head;
    }
};