// Given a roman numeral, convert it to an integer.
//
// Input is guaranteed to be within the range from 1 to 3999.


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var hash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var lastChar = hash[s.charAt(0)];
    var r = 0;
    for (var i = 0, l = s.length; i <= l - 1; ++i) {
        var currentChar = hash[s.charAt(i)];
        if (lastChar < currentChar) {
            //需要相减
            r += currentChar - lastChar - lastChar;
        } else {
            //直接相加
            r += currentChar;
        }
        lastChar = currentChar;
    }
    return r;
};
