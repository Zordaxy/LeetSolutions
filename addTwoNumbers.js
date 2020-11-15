/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let extra = 0;
    let dummyHead = new ListNode(0);
    let curr = dummyHead;

    while (l1 || l2 || extra) {
        let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + extra;
        extra = val >= 10 ? 1 : 0;
        curr.next = new ListNode(val % 10);
        curr = curr.next;
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyHead.next;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}