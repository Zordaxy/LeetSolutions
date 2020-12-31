// 727. Minimum Window Subsequence
// Given strings S and T, find the minimum (contiguous) substring W of S, so that T is a subsequence of W.
// If there is no such window in S that covers all characters in T, return the empty string "". If there are multiple such minimum-length windows, return the one with the left-most starting index.

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var minWindow = function (S, T) {
    let sLen = S.length;
    let tLen = T.length;

    let dp = new Array(tLen);
    for (let i = 0; i < tLen; i++) dp[i] = new Array(sLen);

    for (let i = 0; i < tLen; i++) {
        for (let j = 0; j < sLen; j++) {
            if (T[i] === S[j]) {
                if (i === 0) {
                    dp[i][j] = j;
                } else if (j === 0) {
                    dp[i][j] = null;
                } else {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            } else {
                dp[i][j] = (j !== 0) ? dp[i][j - 1] : null;
            }
        }
    }

    let minStr = "";

    let tracked = dp[dp.length - 1];
    for (let i = 0; i < tracked.length; i++) {
        if (tracked[i] !== null) {
            let size = i - tracked[i] + 1;
            if (!minStr.length || minStr.length > size) minStr = S.substring(tracked[i], i + 1);
        }
    }
    return minStr;
};