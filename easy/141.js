// 141. Linked List Cycle
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.


// Was implemented with fast and slow pointer. They met if there is a cycle
// Erased from the Leetcode
// Similar approaches:

// Using Hash Map
var hasCycle = function (head) {
    const seen = new Set();

    function traverse(node) {
        if (seen.has(node)) return true;
        if (!node) return false;
        seen.add(node);
        return traverse(node.next);
    }
    return traverse(head);
};
// Two Pointers
var hasCycle = function (head) {

    function run(fast, slow) {
        if (!fast || !fast.next) return false;
        if (fast.next === slow) return true;
        return run(fast.next.next, slow.next);
    }
    return run(head, head);
};
// Add Property
var hasCycle = function (head) {

    function run(node) {
        if (!node) return false;
        if (node.seen) return true;
        node.seen = true;
        return run(node.next);
    }
    return run(head);
};