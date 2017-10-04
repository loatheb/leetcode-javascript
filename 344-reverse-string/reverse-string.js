// Write a function that takes a string as input and returns the string reversed.
//
//
// Example:
// Given s = "hello", return "olleh".


/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    return s.split('').reverse().join('');
};
