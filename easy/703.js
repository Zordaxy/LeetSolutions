// 703. Kth Largest Element in a Stream
// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Implement KthLargest class:
// KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
// int add(int val) Returns the element representing the kth largest element in the stream.

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    for (let num of nums) this.add(num);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {  
    let addNode = node => {
        if (!node) return new Node(val);
        if (val > node.val) {
            node.right = addNode(node.right);
        } else {
            node.left = addNode(node.left);
        }
        node.count++;
        return node;
    }
    
    let getInd = (node, searchInd) => {
        if (searchInd > node.count) return null;
        let curInd = (node.right ? node.right.count : 0) + 1;
        
        if (searchInd === curInd) return node.val;
        if (searchInd < curInd) return getInd(node.right, searchInd);
        return getInd(node.left, searchInd - curInd);       
    }

    this.root = addNode(this.root);
    return getInd(this.root, this.k);
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

class Node {
    left = null;
    right = null;
    constructor(val) {
        this.val = val;
        this.count = 1;
    }
}