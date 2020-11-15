// 977. Squares of a Sorted Array
// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.


// Go up to the first nonnegative number. Set the pointers to move left and right from there. Then you simply have to check the magnitude on each side.

var sortedSquares = function(A) {
    const result = [];
    let head = 0;
    let tail = A.length - 1;
  
    while (head <= tail) {
      if (A[head] ** 2 > A[tail] ** 2) result.push(A[head++] ** 2);
      else result.push(A[tail--] ** 2);
    }
  
    return result.reverse();
  };