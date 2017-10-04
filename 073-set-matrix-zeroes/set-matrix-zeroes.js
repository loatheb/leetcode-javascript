// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.
//
//
// click to show follow up.
//
// Follow up:
//
//
// Did you use extra space?
// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var r = matrix.length;
var l = matrix[0].length;
for (var i = 0; i < r; i++) {
    for (var j = 0; j < l; j++) {
        if (matrix[i][j] === 0 && 1 / matrix[i][j] === Infinity) {
            for (var x = 0; x < r; x++) {
                matrix[x][j] = matrix[x][j] && -0;
            }
            for (var y = 0; y < l; y++) {
                matrix[i][y] = matrix[i][y] && -0;
            }
        }
    }
}
};
