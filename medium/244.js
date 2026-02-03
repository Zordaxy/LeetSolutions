// 244. Shortest Word Distance II
// Design a class which receives a list of words in the constructor, and implements a method that takes two words word1 and word2 and return the shortest distance between these two words in the list. Your method will be called repeatedly many times with different parameters. 

/**
 * @param {string[]} words
 */
var WordDistance = function (words) {
    this.map = new Map();
    for (let i = 0; i < words.length; i++) {
        if (!this.map.has(words[i])) {
            this.map.set(words[i], [i]);
        } else {
            this.map.get(words[i]).push(i);
        }
    }
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function (word1, word2) {
    if (!this.map.has(word1) || !this.map.has(word2)) return -1;

    let set1 = this.map.get(word1);
    let set2 = this.map.get(word2);
    let i = 0, j = 0;
    let dist = Infinity;
    while (i < set1.length && j < set2.length) {
        dist = Math.min(dist, Math.abs(set1[i] - set2[j]));
        if (set1[i] > set2[j]) {
            j++;
        } else {
            i++;
        }
    }
    return dist;
};

/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(words)
 * var param_1 = obj.shortest(word1,word2)
 */