// Find the total area covered by two rectilinear rectangles in a 2D plane.
// Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.
//
//
//
//
// Assume that the total area is never beyond the maximum possible value of int.
//
//
// Credits:Special thanks to @mithmatt for adding this problem, creating the above image and all test cases.


/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var width = (Math.min(C, G) - Math.max(A, E));
    var height = (Math.min(D, H) - Math.max(B, F));
    var cover = width * height;
    if (G <= A || D <= F || B >= H || E >= C) {
        cover = 0;
    }
    return ((C - A) * (D - B)) + ((G - E) * (H - F)) - cover;
};
