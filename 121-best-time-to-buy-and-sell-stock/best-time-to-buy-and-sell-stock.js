// Say you have an array for which the ith element is the price of a given stock on day i.
//
// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
//
// Example 1:
//
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5
//
// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
//
//
//
// Example 2:
//
// Input: [7, 6, 4, 3, 1]
// Output: 0
//
// In this case, no transaction is done, i.e. max profit = 0.


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    var min = prices[0];
    var difference = prices[1] - min;
    for (var index = 2, len = prices.length; index <= len - 1; ++index) {
        min = Math.min(min, prices[index - 1]);
        difference = Math.max(difference, prices[index] - min);
    }
    if (difference < 0) {
        return 0;
    }
    return difference;
};
