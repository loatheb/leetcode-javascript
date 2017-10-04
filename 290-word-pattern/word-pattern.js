// Given a pattern and a string str, find if str follows the same pattern.
//  Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
//
// Examples:
//
// pattern = "abba", str = "dog cat cat dog" should return true.
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.
//
//
//
//
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
//
//
// Credits:Special thanks to @minglotus6 for adding this problem and creating all test cases.


/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const map = new Map();
    const map2 = new Map();
    var res = str.split(' ');
    if (pattern.length !== res.length) return false;
    for (var i = 0, l = pattern.length; i <= l - 1; ++i) {
        if (!map.has(res[i])) {
            map.set(res[i], pattern[i]);
        }
        else {
            if (map.get(res[i]) !== pattern[i]) {
                return false;
            }
        }
        if (!map2.has(pattern[i])) {
            map2.set(pattern[i], res[i])
        }else {
            if (map2.get(pattern[i]) !== res[i]) {
                return false;
            }
        }
    }
    return true;
};
