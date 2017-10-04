// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.
//
// This is case sensitive, for example "Aa" is not considered a palindrome here.
//
// Note:
// Assume the length of given string will not exceed 1,010.
//
//
// Example: 
//
// Input:
// "abccccdd"
//
// Output:
// 7
//
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.


/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var hashMap = {};
    var result = 0;
    var hasSingle = 0;
    for (var i = 0, l = s.length; i <= l - 1; ++i) {
        if (!hashMap[s[i]]) {
            hashMap[s[i]] = 1;
        } else {
            hashMap[s[i]]++;
        }
    }
    for (var item in hashMap) {
        var even = hashMap[item] % 2;
        if (even) {
            result += hashMap[item] - 1;
            hasSingle = 1;
        } else {
            result += hashMap[item];
        }
    }
    return result + hasSingle;
};
