// Given two non-negative numbers num1 and num2 represented as string, return the sum of num1 and num2.
//
// Note:
//
// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var carry = 0;
    var len1 = num1.length;
    var len2 = num2.length;
    var res = '';
    while (len1 > 0 || len2 > 0) {
        var sum = (+num1[len1 - 1] || 0) + (+num2[len2 - 1] || 0) + carry;
        res = sum % 10 + '' + res;
        carry = Math.floor(sum / 10);
        len1--;
        len2--
    }
    if (carry) res = '1' + res;
    return res;
};
