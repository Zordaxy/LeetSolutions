// 953. Verifying an Alien Dictionary
// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
//Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let map = new Map();
    for (let i = 0; i < order.length; i++) map.set(order[i], i);
    
    let parent = "";
    
    for (let i = 0; i < words.length; i++)  {
        let word = words[i];
        let isValid = false;
        let ind = 0;
        
            
        while (word[ind] === parent[ind] && ind < parent.length) ind++;
        if (ind === word.length && ind < parent.length) return false;
        
        
        if (map.get(word[ind]) < map.get(parent[ind])) return false;
        parent = word;
    }
    return true;
};