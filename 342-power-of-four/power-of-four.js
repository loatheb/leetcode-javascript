// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
//
// Example:
// Given num = 16, return true.
// Given num = 5, return false.
//
//
// Follow up: Could you solve it without loops/recursion?
//
// Credits:Special thanks to @yukuairoy  for adding this problem and creating all test cases.


/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    var str = num.toString(4);
    var reg = /^10*$/;
    return reg.test(str);
};
