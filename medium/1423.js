// 1423. Maximum Points You Can Obtain from Cards
// There are several cards arranged in a row, and each card has an associated number of points The points are given in the integer array cardPoints.
// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.
// Your score is the sum of the points of the cards you have taken.
// Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    // Sliding window
    let start = cardPoints.length - k;
    let end = cardPoints.length - 1;

    let sum = 0;
    for (let i = start; i <= end; i++) sum += cardPoints[i];
    let max = sum;
    
    while (end !== k - 1) {
        sum -= cardPoints[start];
        start = (start + 1) % cardPoints.length;
        end = (end + 1) % cardPoints.length;
        sum += cardPoints[end];
        max = Math.max(max, sum);
    }
    
    return max;
};