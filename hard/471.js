// 471. Encode String with Shortest Length
// Given a non-empty string, encode the string such that its encoded length is the shortest.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.
// Note:
// k will be a positive integer.
// If an encoding process does not make the string shorter, then do not encode it. If there are several solutions, return any of them.

/**
 * @param {string} s
 * @return {string}
 */
var encode = function (s) {
    let dp = new Array(s.length).fill(null).map(x => new Array(s.length));

    let getPartsNumber = str => {
        let mid = Math.ceil(str.length / 2);
        let fragment;
        for (let i = 0; i <= mid; i++) {
            fragment = str.substring(0, i + 1);
            if (str.length % fragment.length !== 0) continue;

            let counter = 0;
            while (counter < str.length) {
                if (str[counter] !== fragment[counter % fragment.length]) break;
                counter++;
            }
            if (counter === str.length) return str.length / fragment.length;
        }
        return 1;
    }

    for (let len = 1; len <= s.length; len++) {
        for (let i = 0; i <= s.length - len; i++) {
            let j = i + len - 1;
            let str = s.substring(i, j + 1);
            dp[i][j] = str;
            // use dp for substrings
            for (let k = i; k < j; k++) {
                if (dp[i][k].length + dp[k + 1][j].length < dp[i][j].length) dp[i][j] = dp[i][k] + dp[k + 1][j];
            }

            // try to shorten string
            let count = getPartsNumber(str);
            if (count > 1) {
                let subLen = len / count;
                let shortcut = `${count}[${dp[i][i + subLen - 1]}]`;
                if (shortcut.length < dp[i][j].length) dp[i][j] = shortcut;
            }
        }
    }
    return dp[0][s.length - 1]
};

console.log(encode("aaaaa")); // 5[a]
console.log(encode("aabcaabcd")); // 2[aabc]d
console.log(encode("abbbabbbcabbbabbbc")); // 2[2[abbb]c]
