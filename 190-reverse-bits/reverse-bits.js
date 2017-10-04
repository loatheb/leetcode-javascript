// Reverse bits of a given 32 bits unsigned integer.
//
// For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).
//
//
// Follow up:
// If this function is called many times, how would you optimize it?
//
//
// Related problem: Reverse Integer
//
// Credits:Special thanks to @ts for adding this problem and creating all test cases.


/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var str = n.toString(2);
    for (var i = 32 - str.length - 1; i >= 0; --i) {
        str = '0' + str;
    }
    var res = Array.prototype.slice.call(str).reverse().join('');
    return(parseInt(res, 2));
};
