// 269. Alien Dictionary
// There is a new alien language that uses the English alphabet. However, the order among letters are unknown to you.
// You are given a list of strings words from the dictionary, where words are sorted lexicographically by the rules of this new language.
// Derive the order of letters in this language, and return it. If the given input is invalid, return "". If there are multiple valid solutions, return any of them.

/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
    let adj = new Map();

    // build adj list
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (!adj.has(words[i][j])) adj.set(words[i][j], []);
        }
    }

    // populate adj list
    for (let i = 0; i < words.length - 1; i++) {
        if (words[i] === words[i + 1]) continue;
        let j = 0;
        while (words[i][j] === words[i + 1][j]) j++;
        
        if (words[i][j] && !words[i + 1][j]) return '';
        if (!words[i][j] || !words[i + 1][j]) continue;

        adj.get(words[i][j]).push(words[i + 1][j])
    }

    if (checkForCycles(adj)) return "";
    return topoOrder(adj);
};

function topoOrder(adj) {
    let visited = new Set();
    let dfsPost = [];
    let nodes = [...adj.keys()];

    // topological sort
    // reversed PostOrder traversal.
    let topoOrder = el => {
        visited.add(el);
        adj.get(el).forEach(child => {
            if (!visited.has(child)) topoOrder(child);
        });
        dfsPost.push(el);
    }

    for (let i = 0; i < nodes.length; i++) {
        if (!visited.has(nodes[i])) topoOrder(nodes[i]);
    }
    return dfsPost.reverse().join('');
}

function checkForCycles(adj) {
    let visited = new Set();

    let dfs = value => {
        if (visited.has(value)) return true;
        visited.add(value);

        let children = adj.get(value);
        for (let i = 0; i < children.length; i++) {
            let result = dfs(children[i]);
            if (result) return true;
        }
        // Clean up after traversal!
        visited.delete(value);
        return false;
    }

    let nodes = [...adj.keys()];
    for (let i = 0; i < nodes.length; i++) {
        let result = dfs(nodes[i]);
        if (result) return true;
    }
    return false;
}

console.log(alienOrder(["z", "x", "z"])); // ""
console.log(alienOrder(["a", "b", "ca", "cc"])); // "abc"