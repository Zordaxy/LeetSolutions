// 68. Text Justification

// Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
//You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
//Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
//For the last line of text, it should be left justified and no extra space is inserted between words.
//Note:
//A word is defined as a character sequence consisting of non-space characters only.
//Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
//The input array words contains at least one word.

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    let result = [];

    while (words.length) {
        // determine words for line
        let remains = maxWidth;
        let selected = [words.shift()];
        remains -= selected[0].length;

        while (words.length && remains - words[0].length - 1 >= 0) {
            remains -= words[0].length + 1;
            selected.push(words.shift());
        }

        let line = "";
        // for last line
        if (!words.length) {
            line = selected.join(" ");
            // for the rest
        } else {
            let spaces = new Array(selected.length - 1);
            if (selected.length > 1) {
                let minSpaceCount = selected.length > 1 ? Math.floor(remains / (selected.length - 1)) : 0;
                let minSpace = new Array(minSpaceCount + 1).fill(" ").join("");
                remains = remains % (selected.length - 1);

                for (let i = 0; i < spaces.length; i++) spaces[i] = minSpace;
                let ind = 0;
                while (remains > 0) {
                    spaces[ind] += " ";
                    ind++;
                    remains--;
                }

                for (let i = 0; i < spaces.length; i++) line += selected[i] + spaces[i];
            }

            line += selected[selected.length - 1];
        }

        // update and spaces for last line or lines with 1 word
        while (remains) {
            line += " ";
            remains--;
        }

        result.push(line);
    }
    return result;
};