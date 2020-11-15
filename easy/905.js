// 905. Sort Array By Parity
// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
// You may return any answer array that satisfies this condition.

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let i = 0;
    let j = A.length -  1;
    
    while (i < j) {
        while(A[i]%2 === 0 && i < j) {
            i++
        }
        while(A[j]%2 !== 0 && i < j) {
            j--
        }
        
        // swap
        // [A[i],A[j]]=[A[j],A[i]];
        let temp = A[i];
        A[i] = A[j];
        A[j] = temp;
        i++;
        j--;
    }
    return A;
};