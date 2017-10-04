// Related to question Excel Sheet Column Title
// Given a column title as appear in an Excel sheet, return its corresponding column number.
//
// For example:
//     A -&gt; 1
//     B -&gt; 2
//     C -&gt; 3
//     ...
//     Z -&gt; 26
//     AA -&gt; 27
//     AB -&gt; 28 
//
// Credits:Special thanks to @ts for adding this problem and creating all test cases.


/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var res = 0;
    for (var i = 0, l = s.length; i < l; i++) {
        var num = s[i].charCodeAt() - 64;
        res += num * Math.pow(26, s.length - i - 1);
    }
    return res;
};
