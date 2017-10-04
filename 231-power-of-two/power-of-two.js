// Given an integer, write a function to determine if it is a power of two.
//
//
// Credits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n < 0) return false;
    var hasOne = false;
    while (n > 0) {
        if (n & 1) {
            if (hasOne) {
                return false;
            }
            hasOne = true;
        }
        n >>= 1;
    }
    return hasOne;
};
