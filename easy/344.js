// 344. Reverse String
// Write a function that reverses a string. The input string is given as an array of characters char[].
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// You may assume all the characters consist of printable ascii characters.


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let lo = 0;
    let hi = s.length - 1;
    while (lo < hi)  {
        [s[lo], s[hi]] = [s[hi], s[lo]];
        lo++;
        hi--;
    }
    return s;
};