// Say you have an array for which the ith element is the price of a given stock on day i.
//
// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0;
    var profits = 0;
    for (var i = 1, l = prices.length; i <= l - 1; ++i) {
        if (prices[i] > prices[i - 1]) {
            profits += prices[i] - prices[i - 1];
        }
    }
    return profits;
};
