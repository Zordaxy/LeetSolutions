// 273. Integer to English Words
// Convert a non-negative integer num to its English words representation.

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    if (num === 0) return "Zero";

    let str = num.toString().split("");
    let nums = new Map([
        ["0", null],
        ["1", "One"],
        ["2", "Two"],
        ["3", "Three"],
        ["4", "Four"],
        ["5", "Five"],
        ["6", "Six"],
        ["7", "Seven"],
        ["8", "Eight"],
        ["9", "Nine"],
    ]);

    let teens = new Map([
        ["10", "Ten"],
        ["11", "Eleven"],
        ["12", "Twelve"],
        ["13", "Thirteen"],
        ["14", "Fourteen"],
        ["15", "Fifteen"],
        ["16", "Sixteen"],
        ["17", "Seventeen"],
        ["18", "Eighteen"],
        ["19", "Nineteen"],
    ]);

    let tens = new Map([
        ["2", "Twenty"],
        ["3", "Thirty"],
        ["4", "Forty"],
        ["5", "Fifty"],
        ["6", "Sixty"],
        ["7", "Seventy"],
        ["8", "Eighty"],
        ["9", "Ninety"],
    ]);


    let getOne = () => nums.get(str.pop());

    let getTwo = () => {
        if (str.length < 2) return [getOne()];

        let [second, first] = [str.pop(), str.pop()];
        if (+first >= 2) {
            return [tens.get(first), nums.get(second)];
        } else if (+first >= 1) {
            return [teens.get(first + second)];
        } else {
            return [nums.get(second)];
        }
    }

    let getThree = suffix => {
        let result = getTwo();

        if (str.length) {
            let hund = str.pop();
            if (+hund) result = [nums.get(hund), "Hundred", ...result];
        }

        result = result.filter(x => x);
        if (result.length && suffix) result.push(suffix);
        return result;
    }

    let result = getThree();
    if (str.length) result.unshift(...getThree("Thousand"));
    if (str.length) result.unshift(...getThree("Million"));
    if (str.length) result.unshift(...getThree("Billion"));

    return result.filter(x => x).join(" ");
};