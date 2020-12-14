// 208. Implement Trie (Prefix Tree)
// Implement a trie with insert, search, and startsWith methods.

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    // let quan = 26;
    this.root = new Node();
    this.start = 'a'.charCodeAt(0); // 97
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
        let charInd = word.charCodeAt(i) - this.start;
        if (!node.children[charInd]) node.children[charInd] = new Node();
        node = node.children[charInd];
    }
    node.isWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
        let charInd = word.charCodeAt(i) - this.start;
        if (!node.children[charInd]) return false;
        node = node .children[charInd];
    }
    
    return node.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
        let charInd = prefix.charCodeAt(i) - this.start;
        if (!node.children[charInd]) return false;
        node = node .children[charInd];
    }
    
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

class Node {
    children = new Array();
    isWord = false;
}

let trie = new Trie();
console.log(trie.insert('app'), trie.insert('apple'), trie.insert('beer'), trie.insert('add'), trie.insert('jam'), trie.insert('rental'));
console.log(trie.search('apps'));