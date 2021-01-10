// 67. Add Binary
// Given two binary strings, return their sum (also a binary string).
// The input strings are both non-empty and contains only characters 1 or 0

let addBinary = (a, b) => {
    // 1st + 2nd + carry = sum, new carry, decimal sum
    //   0 +  0  + 0 = 0, 0 (0)
    //   0 +  0  + 1 = 1, 0 (1)
    //   0 +  1  + 1 = 0, 1 (2)
    //   1 +  1  + 1 = 1, 1 (3)

    let carry = 0;
    let result = [];

    let len1 = a.length - 1;
    let len2 = b.length - 1;

    while (carry || len1 >= 0 || len2 >= 0) {
        let sum = (+a[len1] || 0) + (+b[len2] || 0) + carry;
        carry = sum > 1;
        sum = sum % 2;
        result.unshift(sum);
        len1--;
        len2--;
    }
    return result.join("");
};