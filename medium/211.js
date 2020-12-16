// 211. Design Add and Search Words Data Structure
// Design a data structure that supports adding new words and finding if a string matches any previously added string.
// Implement the WordDictionary class:
// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.root = new Node();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    for (let ch of word) {
        if (!node.children.has(ch)) node.children.set(ch, new Node());
        node = node.children.get(ch);
    }
    node.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word, node = this.root) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ".") {
            let substring = word.substring(i + 1);
            return [...node.children.values()].some(node => this.search(substring, node));
        }
        if (!node.children.has(word[i])) return false;
        node = node.children.get(word[i]);
    }
    return node.isWord;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

class Node {
    children = new Map();
    isWord = false;
}

let dict = new WordDictionary();
console.log(dict.addWord("bad"), dict.addWord("dad"), dict.addWord("mad"), dict.search("pad"));
console.log(dict.search("bad"), dict.search(".ad"));