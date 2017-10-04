// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
//
//
//
// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.
//
//
//
// Note:
// Have you consider that the string might be empty? This is a good question to ask during an interview.
//
// For the purpose of this problem, we define empty string as valid palindrome.


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]*/g, '').toLowerCase();
    for (var i = 0, l = s.length; i <= l / 2; ++i) {
        if (s[i] !== s[l - 1 - i]) {
            return false;
        }
    }
    return true;
};
