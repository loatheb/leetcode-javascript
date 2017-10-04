// Given an array of strings, group anagrams together.
//
//
// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
// Return:
//
// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
//
// Note: All inputs will be in lower-case.


/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    const hashMap = {};
    strs.forEach((str) => {
        const val = generateKey(str);
        if (hashMap[val]) {
            hashMap[val].push(str);
        } else {
            hashMap[val] = [str];
        }
    });
    const result = [];
    for (let item in hashMap) {
        result.push(hashMap[item]);
    }
    return result;
};
function generateKey (str) {
    let result = 1;
    for (let i = 0, l = str.length; i < l; i++) {
        let n = str[i].charCodeAt() - 'a'.charCodeAt() + 1;
        result = result * (n*n + n + 41) % 2147483647;
    }
    return result;
}
