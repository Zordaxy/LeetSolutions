// 380. Insert Delete GetRandom O(1)
// Implement the RandomizedSet class:
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
    this.map = new Map();
    this.list = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) return false;

    this.map.set(val, this.list.length);
    this.list.push(val);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.map.has(val)) return false;

    let ind = this.map.get(val);
    this.map.delete(val);

    this.list[ind] = this.list[this.list.length - 1];
    this.list.pop();

    this.map.set(this.list[ind], ind);
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    let ind = Math.floor(Math.random() * this.list.length);
    return this.list[ind];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */