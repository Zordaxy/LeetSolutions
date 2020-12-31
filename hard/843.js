// 843. Guess the Word
// This problem is an interactive problem new to the LeetCode platform.

// We are given a word list of unique words, each word is 6 letters long, and one word in this list is chosen as secret.
// You may call master.guess(word) to guess a word.  The guessed word should have type string and must be from the original list with 6 lowercase letters.
// This function returns an integer type, representing the number of exact matches (value and position) of your guess to the secret word.  Also, if your guess is not in the given wordlist, it will return -1 instead.
// For each test case, you have 10 guesses to guess the word. At the end of any number of calls, if you have made 10 or less calls to master.guess and at least one of these guesses was the secret, you pass the testcase.
// Besides the example test case below, there will be 5 additional test cases, each with 100 words in the word list.  The letters of each word in those testcases were chosen independently at random from 'a' to 'z', such that every word in the given word lists is unique.

/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function (wordlist, master) {
    let maches = (w1, w2) => {
        let count = 0;
        for (let i = 0; i < 6; i++) {
            if (w1[i] === w2[i]) count++;
        }
        return count;
    }

    let buildMatchList = arr => {
        let list = new Array(arr.length).fill(0);

        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (maches(arr[i], arr[j])) {
                    list[i]++;
                    list[j]++;
                }
            }
        }
        return list;
    }

    let getBiggest = (arr) => {
        let matchList = buildMatchList(arr);
        let maxInd = -1;
        let curVal = -1;
        for (let i = 0; i < matchList.length; i++) {
            if (matchList[i] > curVal) {
                maxInd = i;
                curVal = matchList[i];
            }
        }
        return arr[maxInd];
    }

    let curArr = wordlist;
    let matching;
    let currWord;

    while (matching !== 6) {
        currWord = getBiggest(curArr);
        matching = master.guess(currWord);
        curArr = curArr.filter(x => maches(currWord, x) === matching);
    }
    return currWord;
};