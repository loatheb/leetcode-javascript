// Given an index k, return the kth row of the Pascal's triangle.
//
//
// For example, given k = 3,
// Return [1,3,3,1].
//
//
//
// Note:
// Could you optimize your algorithm to use only O(k) extra space?


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var result = [];
    for (var i = 0; i < rowIndex + 1; i++) {
        var arr = [];
        arr[0] = arr[i]  = 1;
        for (var j = 1; j < i; j++) {
            arr[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        result.push(arr);
    }
    return result[rowIndex];
};
