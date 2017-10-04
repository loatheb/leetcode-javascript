// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom 
// note can be constructed from the magazines ; otherwise, it will return false. 
//
//
// Each letter in the magazine string can only be used once in your ransom note.
//
//
// Note:
// You may assume that both strings contain only lowercase letters.
//
//
//
// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var hashMap = {};
    for (var i = 0, l = magazine.length; i <= l - 1; ++i) {
        if (hashMap[magazine[i]] === undefined) {
            hashMap[magazine[i]] = 1;
        } else {
            hashMap[magazine[i]]++;
        }
    }
    for (i = 0, l = ransomNote.length; i <= l - 1; ++i) {
        if (!hashMap[ransomNote[i]]) {
            return false;
        } else {
            hashMap[ransomNote[i]]--;
        }
    }
    return true;
};
