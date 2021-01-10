// 28. Implement strStr()
// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = function (haystack, needle) {
    let m = haystack.length;
    let n = needle.length;
    if (!n) return 0;

    let lps = kmpProcess(needle);
    let i = 0; // index for haystack
    let j = 0; // index for needle

    while (i < m) {
        if (haystack[i] == needle[j]) {
            i++;
            j++;
        }
        if (j == n) return i - j;

        // mismatch after j matches
        if (i < m && haystack[i] != needle[j]) {
            if (j) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1;
};

var kmpProcess = function (needle) {
    var lps = new Array(needle.length).fill(0);
    let length = 0;
    let i = 1;

    while (i < needle.length) {
        if (needle[i] === needle[length]) {
            length++;
            lps[i] = length;
            i++;
        } else if (length) {
            length = lps[length - 1];
        } else {
            lps[i] = 0;
            i++;
        }
    }

    return lps;
}