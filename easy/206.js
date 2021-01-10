// 206. Reverse Linked List
// Reverse a singly linked list.


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
var reverseList = function (head) {
    if (!head) return head;

    let prev = null;
    let cur = head;

    while (cur) {
        let next = cur.next;
        cur.next = prev;

        prev = cur;
        cur = next;
    }
    return prev;
};


// version with muving each node to head;
//     if (!head) return head;

//     let parent = head;
//     let moveNode = node => {
//         if (!node) return;
//         let next = node.next;
//         node.next = head;
//         parent.next = next;
//         head = node;
//         moveNode(parent.next);
//     }
//     moveNode(head);
//     return head;