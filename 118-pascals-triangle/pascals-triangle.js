// Given numRows, generate the first numRows of Pascal's triangle.
//
//
// For example, given numRows = 5,
// Return
//
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result = [];
    for (var i = 0, l = numRows; i < l; i++) {
        var arr = [];
        arr[0] = arr[i] = 1;
        for (var j = 1; j < i; j++) {
            arr[j] = result[i - 1][j] + result[i - 1][j - 1];
        }
        result[i] = arr;
    }
    return result;
};
