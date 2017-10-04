// Given a positive integer, return its corresponding column title as appear in an Excel sheet.
//
// For example:
//
//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB 
//
// Credits:Special thanks to @ifanchu for adding this problem and creating all test cases.


/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var result = '';
    while (n) {
        var code = String.fromCharCode( (n - 1) % 26 + 'A'.charCodeAt() );
        n = Math.floor((n - 1) / 26);
        result = code + result;
    }
    return result;
};
