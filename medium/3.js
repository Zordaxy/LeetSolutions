// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s) return 0;

    return byLastIndex(s);
};


function byLastIndex(s) {
    let map = new Map();
    let max = 1;
    start = -1;
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) > start) start = map.get(s[i]);
        max = Math.max(i - start, max);
        map.set(s[i], i);
    }

    return max;
}

function byWindow(s) {
    let max = 1;
    let start = 0, end = 0;
    let set = new Set();

    while (end < s.length) {
        if (!set.has(s[end])) {
            set.add(s[end]);
            end++;
            continue;
        }

        max = Math.max(max, set.size);
        let prev;
        do {
            prev = s[start];
            set.delete(s[start]);
            start++;
        } while (prev !== s[end]);
    }
    max = Math.max(max, set.size);

    return max;
}