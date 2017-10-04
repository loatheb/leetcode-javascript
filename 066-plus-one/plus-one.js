// Given a non-negative number represented as an array of digits, plus one to the number.
//
// The digits are stored such that the most significant digit is at the head of the list.


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var one = 1;
    var resultItem = 0;
    for (var i = digits.length - 1; i >= 0; i--) {
        resultItem = digits[i] + one;
        one = parseInt(resultItem / 10);
        if (resultItem == 10) {
            digits[i] = 0;
        } else {
            digits[i] = resultItem;
        }
    }
    if (one > 0) {
        digits.unshift(one);
    }
    return digits;
};
