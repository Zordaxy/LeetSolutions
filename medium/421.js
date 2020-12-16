// 421. Maximum XOR of Two Numbers in an Array
// Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 ≤ i ≤ j < n.
// Follow up: Could you do this in O(n) runtime?

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    // Trie solution
    let root = new Node();
    let maxLength = 0;
    let res = 0;
    nums = nums.map(x => x.toString(2));
    nums.forEach(x => maxLength = Math.max(maxLength, x.length));
    nums = nums.map(x => {
        let diff = maxLength - x.length;
        for (let i = 0; i < diff; i++) x = "0" + x;
        return x;
    });
    
    for (let num of nums) {
        let node = root;
        let partner = root;
        let xor = "";
        for (let ch of num) {
            if (ch === '1') {
                if (!node.right) node.right = new Node();
                node = node.right;

                if (partner.left) {
                    xor += "1";
                    partner = partner.left;
                } else {
                    xor += "0";
                    partner = partner.right;
                }
            } else {
                if (!node.left) node.left = new Node();
                node = node.left;

                if (partner.right) {
                    xor += "1";
                    partner = partner.right;
                } else {
                    xor += "0";
                    partner = partner.left;
                }
            }
        }

        res = Math.max(res, parseInt(xor, 2))
    }
    
    return res;
};

class Node {
    left = null;
    right = null;
}

console.log(findMaximumXOR([3,10,5,25,2,8]), findMaximumXOR([8,10,2])); // 28 10