// 779. K-th Symbol in Grammar
// On the first row, we write a 0. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.
// Given row N and index K, return the K-th indexed symbol in row N. (The values of K are 1-indexed.) (1 indexed).

/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
    if (K <= 1) return 0;
    let mid = Math.ceil(K / 2);
    return kthGrammar(N, mid) === K % 2 ? 1 : 0;
};

console.log(kthGrammar(10,1), kthGrammar(10,2), kthGrammar(10,3), kthGrammar(10,4), kthGrammar(10,5), kthGrammar(10,6)); // 0 1 1 0 1 0
