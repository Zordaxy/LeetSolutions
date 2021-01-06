// 809. Expressive Words
// Sometimes people repeat letters to represent extra feeling, such as "hello" -> "heeellooo", "hi" -> "hiiii".  In these strings like "heeellooo", we have groups of adjacent letters that are all the same:  "h", "eee", "ll", "ooo".
// For some given string S, a query word is stretchy if it can be made to be equal to S by any number of applications of the following extension operation: choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is 3 or more.
// For example, starting with "hello", we could do an extension on the group "o" to get "hellooo", but we cannot get "helloo" since the group "oo" has size less than 3.  Also, we could do another extension like "ll" -> "lllll" to get "helllllooo".  If S = "helllllooo", then the query word "hello" would be stretchy because of these two extension operations: query = "hello" -> "hellooo" -> "helllllooo" = S.
// Given a list of query words, return the number of words that are stretchy. 

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function(S, words) {
    if (!S || !words || !words.length) return 0;
    let getSize = (word, ind) => {
        let start = ind;
        while (word[ind] === word[start]) ind++;
        return ind - start;
    }
    
    let isStretchy = word => {
        let i = 0;
        let j = 0;
        while (i < S.length || j < word.length) {
            if (S[i] !== word[j]) return false;
            
            let sSize = getSize(S, i);
            let wSize = getSize(word, j);
            if (sSize < wSize || sSize < 3 && wSize !== sSize) return false;
            i += sSize;
            j += wSize;
        }
        return true;
    }
    
    let count = 0;
    for (let word of words) {
        if (isStretchy(word)) count ++;
    }
    
    return count;
};