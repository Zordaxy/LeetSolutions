// 234. Palindrome Linked List
// Given a singly linked list, determine if it is a palindrome.

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // Alternative: make additional linked list and reverse. Than compare. O(n) space
    if (!head) return true;
    let tail = head;
    let length = 1;
    while (tail.next) {
        tail = tail.next;
        length ++;
    }
    
    let endHead = head;
    for (let i = 0; i < Math.ceil(length/2); i++) endHead = endHead.next;
    endHead = reverse(endHead);
    
    while (head && endHead) {
        if (head.val != endHead.val) return false;
        head = head.next;
        endHead = endHead.next;
    }
    return true;
};

function reverse(head) {
    let parent = null;
    let current = head;
    let next;
    
    while(current) {
        next = current.next;
        current.next = parent;
        parent = current;
        current = next;
    }
    
    return parent;
}