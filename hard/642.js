// 642. Design Search Autocomplete System
// Design a search autocomplete system for a search engine. Users may input a sentence (at least one word and end with a special character '#'). For each character they type except '#', you need to return the top 3 historical hot sentences that have prefix the same as the part of sentence already typed. Here are the specific rules:
// The hot degree for a sentence is defined as the number of times a user typed the exactly same sentence before.
// The returned top 3 hot sentences should be sorted by hot degree (The first is the hottest one). If several sentences have the same degree of hot, you need to use ASCII-code order (smaller one appears first).
// If less than 3 hot sentences exist, then just return as many as you can.
// When the input is a special character, it means the sentence ends, and in this case, you need to return an empty list.
// Your job is to implement the following functions:
// The constructor function:
// AutocompleteSystem(String[] sentences, int[] times): This is the constructor. The input is historical data. Sentences is a string array consists of previously typed sentences. Times is the corresponding times a sentence has been typed. Your system should record these historical data.
// Now, the user wants to input a new sentence. The following function will provide the next character the user types:
// List<String> input(char c): The input c is the next character typed by the user. The character will only be lower-case letters ('a' to 'z'), blank space (' ') or a special character ('#'). Also, the previously typed sentence should be recorded in your system. The output will be the top 3 historical hot sentences that have prefix the same as the part of sentence already typed.

/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function (sentences, times) {
    this.root = new Node();
    this.prefix = "";
    for (let i = 0; i < sentences.length; i++) this.add(sentences[i], times[i]);
};

/** 
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function (c) {
    if (c === "#") {
        this.add(this.prefix, 1);
        this.prefix = "";
        return [];
    } else {
        this.prefix += c;
        curNode = this.root;
        for (let pChar of this.prefix) {
            if (!curNode.children.has(pChar)) return [];
            curNode = curNode.children.get(pChar);
        }
        return curNode.hotList.map(x => x.str);
    }
};

AutocompleteSystem.prototype.add = function (sentence, t) {
    let node = this.root;
    let visited = [];
    for (let ch of sentence) {
        if (!node.children.has(ch)) node.children.set(ch, new Node());
        node = node.children.get(ch);
        if (!visited.includes(node))
        visited.push(node);
    }
    node.str = sentence;
    node.hotLevel += t;

    for (let parent of visited) {
        if (!parent.hotList.some(x => x.str === sentence)) parent.hotList.push(node);
        parent.hotList.sort((a, b) => a.hotLevel !== b.hotLevel
            ? b.hotLevel - a.hotLevel : b.str < a.str ? 1 : -1);
        if (parent.hotList.length > 3) parent.hotList.pop();
    }
};

/** 
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */

class Node {
    children = new Map();
    hotLevel = 0;
    hotList = [];
}

["AutocompleteSystem","input","input","input","input","input","input","input","input","input","input","input","input"]
[["i"],[" "],["a"],["#"],["i"],[" "],["a"],["#"],["i"],[" "],["a"],["#"]]

let auto = new AutocompleteSystem(["i love you","island","iroman","i love leetcode"],[5,3,2,2]);
console.log(auto.input("i"), auto.input(" "), auto.input("a"), auto.input("#"));
console.log(auto.input("i"), auto.input(" "), auto.input("a"), auto.input("#"));
console.log(auto.input("i"), auto.input(" "), auto.input("a"), auto.input("#"));

// ["i love you","island","i love leetcode"],["i love you","i love leetcode"],[],[]
// ["i love you","island","i love leetcode"],["i love you","i love leetcode","i a"],["i a"],[]
// ["i love you","island","i a"],["i love you","i a","i love leetcode"],["i a"],[]