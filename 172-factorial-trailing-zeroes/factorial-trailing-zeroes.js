// Given an integer n, return the number of trailing zeroes in n!.
//
// Note: Your solution should be in logarithmic time complexity.
//
// Credits:Special thanks to @ts for adding this problem and creating all test cases.


/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    if (n === 0) return 0;
    var res = 0;
    while (n !== 0) {
        n = parseInt(n / 5);
        res += n;
    }
    return res;
};
