// 705. Design HashSet
// Design a HashSet without using any built-in hash table libraries.
// To be specific, your design should include these functions:
// add(value): Insert a value into the HashSet. 
// contains(value) : Return whether the value exists in the HashSet or not.
// remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.


/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    // Uses Linked list for buckets to have O(1) remove
    // Also we can use array and swap(!) entry with last element before removal
    this.coreNumber = 997 // Or any other prime number like 769
    this.set = new Array(this.coreNumber);
    
    this.getHash = num => num % this.coreNumber;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    let hash = this.getHash(key);
    if (!this.set[hash]) {
        this.set[hash] = new Node(key);
    } else {
        let node = this.set[hash];
        let parent;
        while(node && node.val !== key) {
            parent = node;
            node = node.next;
        }
        if (!node) parent.next = new Node(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let hash = this.getHash(key);
    if (!this.set[hash]) return;
    
    let node = this.set[hash];
    let parent;
    while(node && node.val !== key) {
        parent = node;
        node = node.next;
    }
    if (!node) return;
    
    if (parent) {
        parent.next = node.next;
    } else {
        this.set[hash] = node.next;
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let hash = this.getHash(key);
    
    let node = this.set[hash];
    while(node && node.val !== key) node = node.next;
    
    return !!node;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

class Node {
    val;
    next = null;
    constructor(val) {
        this.val = val;
    }
}