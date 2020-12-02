// 49. Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // O(N KlogK);
    // let getHash = str => str.split('').sort().join('');
    
    // O(N K);
    let getHash = str => {
        let count = new Array(26);
        for (let i = 0; i < str.length; i++) {
            let a = 'a'.charCodeAt(0);
            let ind = str.charCodeAt(i) - a;
            count[ind] = count[ind] ? count[ind] + 1 : 1;
        }
        return count.join('#');
    }
    
    let map = new Map();
    
    for(let i = 0; i < strs.length; i++) {
        let hash = getHash(strs[i]);
        if (!map.has(hash)) map.set(hash, []);
        map.get(hash).push(strs[i]);
    }
    
    return [...map.values()];
};