// 249. Group Shifted Strings
// Given a string, we can "shift" each of its letter to its successive letter, for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:
// "abc" -> "bcd" -> ... -> "xyz"
// Given a list of non-empty strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.

/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    // O(N KlogK);
    // let getHash = strings => strings.split('').sort().join('');
    
    // O(N K);
    let getHash = str => {
        let hash = [];
        for (let i = 0; i < str.length - 1; i++) {
            let diff = str.charCodeAt(i + 1) - str.charCodeAt(i);
            // cover negative cases.
            hash.push((diff + 26) % 26);
        }
        return hash.join('#');
    }
    
    let map = new Map();
    
    for(let i = 0; i < strings.length; i++) {
        let hash = getHash(strings[i]);
        if (!map.has(hash)) map.set(hash, []);
        map.get(hash).push(strings[i]);
    }
    
    return [...map.values()];
};