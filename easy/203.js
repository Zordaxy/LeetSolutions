// 203. Remove Linked List Elements
// Remove all elements from a linked list of integers that have value val.

/**
* @param {ListNode} head
* @param {number} val
* @return {ListNode}
*/
var removeElements = function(head, val) {
   // Alternative solution - recursion
   if (!head) return null;
   let prev = null;
   let node = head;
   while (node) {
       if (node.val === val) {
           if (prev) {
               prev.next = node.next;
           } else {
               head = node.next;
           }
           node = node.next;
       } else {
           prev = node;
           node = node.next;
       }
   }

   return head;
};