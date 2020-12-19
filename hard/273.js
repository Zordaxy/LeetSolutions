// 273. Integer to English Words
// Convert a non-negative integer num to its English words representation.

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) return "Zero";
    let digits = new Map([
        ["0", ""],
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
        ["0", ""],
        ["1", "Ten"],
        ["2", "Twenty"],
        ["3", "Thirty"],
        ["4", "Forty"],
        ["5", "Fifty"],
        ["6", "Sixty"],
        ["7", "Seventy"],
        ["8", "Eighty"],
        ["9", "Ninety"],
    ])
    let arr = num.toString().split('');
    
    let getTuple = () => {
        if (!arr.length) return "";
        if (arr.length === 1) return digits.get(arr.pop());
        
        let digitSign = arr.pop();
        let tenSign = arr.pop();
        if (tenSign === "1") return teens.get(tenSign + digitSign);
        
        let ten = tens.get(tenSign);
        let digit = digits.get(digitSign);
        
        let res = [];
        if (ten) res.push(ten);
        if (digit) res.push(digit);
        return res.join(" ");
    }
    
    let getTripple = name => {
        let tuple = getTuple();
        let hundred = arr.length ? digits.get(arr.pop()) : '';
        
        let res = [];
        if (hundred) res.push(`${hundred} Hundred`);
        if (tuple) res.push(tuple);
        if (name && res.length) res.push(name);

        return res.join(" ");
    }
    
    let result = [];
    result.unshift(getTripple());
    result.unshift(getTripple("Thousand"));
    result.unshift(getTripple("Million"));
    result.unshift(getTripple("Billion"));
    
    return result.filter(x => x !== "").join(" ");
};