// 1570. Dot Product of Two Sparse Vectors
// Given two sparse vectors, compute their dot product.
// Implement class SparseVector:
// SparseVector(nums) Initializes the object with the vector nums
// dotProduct(vec) Compute the dot product between the instance of SparseVector and vec
// A sparse vector is a vector that has mostly zero values, you should store the sparse vector efficiently and compute the dot product between two SparseVector.
// Follow up: What if only one of the vectors is sparse?

/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.entries = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            this.entries.set(i, nums[i]);
        }
    }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let product = 0;
    let min;
    let max;
    if (this.entries.size < vec.entries.size) {
        min = this.entries;
        max = vec.entries;
    } else {
        min = vec.entries;
        max = this.entries;
    }
    
    
    for (let [key, val] of min) {
        if (max.has(key)) product += max.get(key) * val;
    }
    return  product;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);