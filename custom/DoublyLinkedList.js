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

function print(list) {
    let result = [];
    let head = list.head;
    while(head)  {
        result.push(head.val);
        head = head.next;
    }
    console.log("list: ", result.join(", "));
}

let list = new MyLinkedList();
list.addAtHead(7);
list.addAtHead(2);
list.addAtHead(1);
list.addAtIndex(3, 0);
list.deleteAtIndex(2);
list.addAtHead(6);
list.addAtTail(4);
console.log(list.get(4));

print(list);