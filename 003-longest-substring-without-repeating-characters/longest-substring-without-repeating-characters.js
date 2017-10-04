// Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var hashMap = {};
    var i = j = 0;
    var n = s.length;
    var len = 0;
    while (i < n && j < n) {
        if (!hashMap[s[i]]) {
            hashMap[s[i++]] = true;
            len = Math.max(len, i - j);
        } else {
            hashMap[s[j++]] = false;
        }
    }
    return len;
};
