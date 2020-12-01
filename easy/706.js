// 706. Design HashMap
// Design a HashMap without using any built-in hash table libraries.
// To be specific, your design should include these functions:
// put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
// get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.


/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    // Uses Linked list for buckets to have O(1) remove
    // Also we can use array and swap(!) entry with last element before removal
    this.coreNumber = 997 // Or any other prime number like 769
    this.map = new Array(this.coreNumber);
    
    this.getHash = num => num % this.coreNumber;
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    let hash = this.getHash(key);
    if (!this.map[hash]) {
        this.map[hash] = new Node(key, value);
    } else {
        let node = this.map[hash];
        let parent;
        while(node && node.key !== key) {
            parent = node;
            node = node.next;
        }
        if (!node) {
            parent.next = new Node(key, value);
        } else {
            node.val = value;
        }
    }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let hash = this.getHash(key);
    
    let node = this.map[hash];
    while(node && node.key !== key) node = node.next;
    
    return node ? node.val : -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let hash = this.getHash(key);
    if (!this.map[hash]) return;
    
    let node = this.map[hash];
    let parent;
    while(node && node.key !== key) {
        parent = node;
        node = node.next;
    }
    if (!node) return;
    
    if (parent) {
        parent.next = node.next;
    } else {
        this.map[hash] = node.next;
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

class Node {
    next = null;
    constructor(key, value) {
        this.val = value;
        this.key = key;
    }
}