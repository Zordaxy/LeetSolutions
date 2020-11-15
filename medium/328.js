// 328. Odd Even Linked List
// Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.
// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head) return null;
    if (!head.next) return head;
    
    let node = head.next.next;
    let isOdd = true;
    let odd = head;
    let even = head.next;
    let evenHead = head.next;

    // Track tail of odd and even than connect them
    while(node) {
        if (isOdd) {
            odd.next = node;
            odd = odd.next;
        } else {
            even.next = node;
            even = even.next;
        }
        node = node.next;
        isOdd = !isOdd;
    }
    odd.next = evenHead;
    // Clean up last element to prevent cycle
    even.next = null;
    
    return head;
};