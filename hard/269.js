// 269. Alien Dictionary
// There is a new alien language that uses the English alphabet. However, the order among letters are unknown to you.
// You are given a list of strings words from the dictionary, where words are sorted lexicographically by the rules of this new language.
// Derive the order of letters in this language, and return it. If the given input is invalid, return "". If there are multiple valid solutions, return any of them.

/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
    // build adj list
    let adj = new Map();
    words.forEach(w => w.split('').forEach(ch => {
        if (!adj.has(ch)) adj.set(ch, []);
    }))

    // populate adj list
    for (let i = 0; i < words.length - 1; i++) {
        let left = words[i];
        let right = words[i + 1];
        let j = 0;
        while (left[j] && left[j] === right[j]) j++;

        // invalid case when "abcd is followed by "abc"
        if (left[j] && !right[j]) return '';
        // ignore duplicate word
        if (!left[j] || !right[j]) continue;

        adj.get(left[j]).push(right[j])
    }

    // topological sort
    // reversed PostOrder traversal.
    let visited = new Set();
    let curPath = new Set();
    let dfsPost = [];
    let nodes = [...adj.keys()];
    let hasCircle = false;

    let topoOrder = el => {
        if (curPath.has(el)) {
            hasCircle = true;
            return;
        }
        if (visited.has(el)) return;

        visited.add(el);
        curPath.add(el);

        for (let child of adj.get(el)) topoOrder(child);
        dfsPost.push(el);
        curPath.delete(el);
    }
    for (let node of nodes) topoOrder(node);

    return !hasCircle ? dfsPost.reverse().join('') : '';
};

console.log(alienOrder(["z", "x", "z"])); // ""
console.log(alienOrder(["a", "b", "ca", "cc"])); // "abc"