// Write an algorithm to determine if a number is "happy".
//
// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
//
// Example:&nbsp;19 is a happy number
//
//
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
//
//
// Credits:Special thanks to @mithmatt and @ts for adding this problem and creating all test cases.


/**
 * @param {number} n
 * @return {boolean}
 */
var fac = function (num) {
    var sum = 0;
    num.toString().split('').forEach((item) => {
        sum += Math.pow(item, 2);
    });
    return sum;
}
var isHappy = function(n) {
    var hashMap = {};
    var result = fac(n);
    while(!hashMap[result]) {
        hashMap[result] = true;
        result = fac(result);
    }
    if (result === 1) { return true; }
    return false;
};

