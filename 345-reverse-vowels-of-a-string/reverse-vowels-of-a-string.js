// Write a function that takes a string as input and reverse only the vowels of a string.
//
//
// Example 1:
// Given s = "hello", return "holle".
//
//
//
// Example 2:
// Given s = "leetcode", return "leotcede".
//
//
//
// Note:
// The vowels does not include the letter "y".


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var string = s.split('');
    var re = /[aeiouAEIOU]/g;
    var array = [];
    while ((match = re.exec(s)) != null) {
        array.push(match.index);
    }
    
    for (var i = 0; i < array.length/2; i++) {
        var temp = string[array[i]];
        string[array[i]] = string[array[array.length - 1 - i]];
        string[array[array.length - 1 - i]] = temp;
    }
    return string.join('');
};
