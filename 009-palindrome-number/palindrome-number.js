// Determine whether an integer is a palindrome. Do this without extra space.
//
// click to show spoilers.
//
// Some hints:
//
// Could negative integers be palindromes? (ie, -1)
//
// If you are thinking of converting the integer to string, note the restriction of using extra space.
//
// You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?
//
// There is a more generic way of solving this problem.


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    
    if (x < INT_MIN || x > INT_MAX) return false;
    if (x < 0) return false;
    if (x === 0) return true;
    var duplicate = x;
    var reverse = 0;
    while(x !== 0) {
        reverse = reverse * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    if (duplicate === reverse) return true;
    return false;
};
