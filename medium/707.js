// 707. Design Linked List
// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let node = this.head;
    let ind = 0;
    
    // do not forget "this."!
    while (ind < index && node) {
        node = node.next;
        ind++;
    }
    
    return node && ind === index ? node.val : -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    if (this.head) this.head.prev = newNode;
    this.head = newNode;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
        return;
    }
    
    let tail = this.head;
    while(tail.next) tail = tail.next;
    tail.next = newNode;
    newNode.prev = tail;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let newNode = new Node(val);
    if (index === 0) {
        newNode.next = this.head;
        if (this.head) {
            this.head.prev = newNode;
        }
        this.head = newNode;
        return;
    }
    
    
    let node = this.head;
    let ind = 1;
    
    while (ind < index && node) {
        node = node.next;
        ind++;
    }
    
    if (node && ind === index) {
        // insert node
        let next = node.next;
        newNode.next = next;
        newNode.prev = node;
        node.next = newNode;
        if (next) {
            next.prev = newNode;
        }
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (!this.head) return;
    if (index === 0) {
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
        return;
    }
    
    let node = this.head;
    let ind = 0;
    
    while (ind < index && node) {
        node = node.next;
        ind++;
    }
    
    if (node && ind === index) {
        // delete node
        node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev;
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

class Node {
    next = null;
    prev = null;
    constructor(val) {
        this.val = val;
    }
}