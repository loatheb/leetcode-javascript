// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
//
// Example:
//
// Input: "babad"
//
// Output: "bab"
//
// Note: "aba" is also a valid answer.
//
//
//
// Example:
//
// Input: "cbbd"
//
// Output: "bb"


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var a = s.split(''),left, right,
        size = a.length,
        max = Number.MIN_VALUE,
        start = 0;

    for(var i = 0; i < size; i = i + 0.5){
        left = Math.ceil(i - 1);
        right = Math.floor(i + 1);
        while(left >=0 && right < size) {
            if (a[left] === a[right]){
                left--;
                right++;
            } else { break;}
        }
        if (right - left - 1 > max){
            max = right - left - 1;
            start = left + 1;
        }
    }

    return s.slice(start, start + max);
};
