// 364. Nested List Weight Sum II
// Given a nested list of integers, return the sum of all integers in the list weighted by their depth.
// Each element is either an integer, or a list -- whose elements may also be integers or other lists.
// Different from the previous question where weight is increasing from root to leaf, now the weight is defined from bottom up. i.e., the leaf level integers have weight 1, and the root level integers have the largest weight.

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function (nestedList) {
    // get max depth
    let getDepth = entry => {
        if (entry.isInteger()) {
            return 1;
        } else {
            let depth = 0;
            for (let el of entry.getList()) depth = Math.max(depth, 1 + getDepth(el));
            return depth;
        }
    }
    let maxDepth = nestedList.reduce((acc, val) => Math.max(acc, getDepth(val)), 0);

    let getWeight = (entry, level) => {
        if (entry.isInteger()) {
            return entry.getInteger() * level;
        } else {
            let weight = 0;
            for (let el of entry.getList()) weight += getWeight(el, level - 1);
            return weight;
        }
    }

    return nestedList.reduce((acc, val) => acc + getWeight(val, maxDepth), 0);
};