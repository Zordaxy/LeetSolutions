// 146. LRU Cache
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
// Implement the LRUCache class:
// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// Follow up:
// Could you do get and put in O(1) time complexity?

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.size = 0;

    this.head = null;
    this.tail = null;
    this.map = new Map();

    this.pushToHead = node => {
        if (this.head === node) return;
        if (this.tail === node) this.tail = node.prev;

        if (node.prev) node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev;
        if (this.head === node) this.head = node.next;

        node.prev = null;
        this.setHead(node);
    }

    this.setHead = node => {
        if (this.head === node) return;
        node.next = this.head;
        if (this.head) this.head.prev = node;
        this.head = node;
        node.prev = null;
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.map.has(key)) return -1;
    let node = this.map.get(key);
    this.pushToHead(node);

    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        let node = this.map.get(key);
        node.val = value;

        this.pushToHead(node);
        return;
    }

    let node = new Node(key, value);
    this.map.set(key, node);

    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        this.setHead(node);
    }
    if (this.size === this.capacity) {
        this.map.delete(this.tail.key);
        this.tail = this.tail.prev;

        this.tail.next = null;
    } else {
        this.size++;
    }
};

class Node {
    constructor(key, val) {
        this.next = null;
        this.prev = null;
        this.val = val;
        this.key = key;
    }
}

let c = new LRUCache(2);
console.log(c.put(2, 1));
console.log(c.put(1, 1));
console.log(c.put(2, 3));
console.log(c.put(4, 1));
console.log(c.get(1));
console.log(c.get(2));

