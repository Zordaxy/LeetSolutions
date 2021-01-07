// 121. Best Time to Buy and Sell Stock
// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// Note that you cannot sell a stock before you buy one.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices || !prices.length) return 0;
    let lo = Infinity;
    let delta = 0;
    
    for (let i = 0; i < prices.length; i++) {
        let num = prices[i];
        if (num > lo) {
            delta = Math.max(delta, num - lo);
        } else {
            lo = Math.min(lo, num);
        }
    }
    return delta;
};