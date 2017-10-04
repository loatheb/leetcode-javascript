// Given two binary strings, return their sum (also a binary string).
//
//
//
// For example,
// a = "11"
// b = "1"
// Return "100".


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var carry = 0;
    var len1 = a.length;
    var len2 = b.length;
    var res = '';
    while (len1 > 0 || len2 > 0) {
        var sum = (+a[len1 - 1] || 0) + (+b[len2 - 1] || 0) + carry;
        carry = Math.floor(sum / 2);
        res = sum % 2 + res;
        len1--;
        len2--;
    }
    if (carry) res = '1' + res;
    return res;
};
