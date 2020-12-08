// 428. Serialize and Deserialize N-ary Tree
// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
//Design an algorithm to serialize and deserialize an N-ary tree. An N-ary tree is a rooted tree in which each node has no more than N children. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that an N-ary tree can be serialized to a string and this string can be deserialized to the original tree structure.

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
    constructor() {
      
  }
  
  /** 
   * @param {Node} root
   * @return {string}
   */
  // Encodes a tree to a single string.
  serialize = function(root) {
      if (!root) return [];
      let queue = [root, null];
      let res = [];
      while(queue.length) {
          let node = queue.shift();
          if (!node) {
              res.push(null);
              continue;
          }
          res.push(node.val);
          
          for (let j = 0; j < node.children.length; j++) queue.push(node.children[j]);
          queue.push(null);
      }
      
      return res;
  };
  
  /** 
   * @param {string} data 
   * @return {Node}
   */
  // Decodes your encoded data to tree.
  deserialize = function(data) {
      if (!data || !data.length) return null;
      let root = new Node(data.shift(), []);
      // remove null;
      data.shift()
      let queue = [root];
      while(queue.length) {
          let node = queue.shift();
          while(data && data[0] !== null) {
              let child = new Node(data.shift(), []);
              node.children.push(child);
          }
          queue.push(...node.children);
          // remove null;
          data.shift();
      }
      return root;
  };
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));