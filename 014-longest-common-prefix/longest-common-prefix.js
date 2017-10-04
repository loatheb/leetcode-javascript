// Write a function to find the longest common prefix string amongst an array of strings.


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length <= 0) return '';
    return strs.reduce(function (prev, next) {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
};
