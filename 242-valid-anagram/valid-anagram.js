// Given two strings s and t, write a function to determine if t is an anagram of s. 
//
// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.
//
//
// Note:
// You may assume the string contains only lowercase alphabets.
//
// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const len = s.length;
    if (len !== t.length) return false;
    const hashTab = {};
    for (let i = 0; i < len; i++) {
        if (!hashTab[s[i]]) {
            hashTab[s[i]] = 1;
        } else {
            hashTab[s[i]]++;
        }
        if (!hashTab[t[i]]) {
            hashTab[t[i]] = -1;
        } else {
            hashTab[t[i]]--;
        }
    }
    for (let item in hashTab) {
        if (hashTab[item]) return false;
    }
    return true;
};
