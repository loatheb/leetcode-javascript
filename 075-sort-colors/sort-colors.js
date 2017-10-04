// Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.
//
//
//
// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
//
//
//
// Note:
// You are not suppose to use the library's sort function for this problem.
//
//
// click to show follow up.
//
//
// Follow up:
// A rather straight forward solution is a two-pass algorithm using counting sort.
// First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
// Could you come up with an one-pass algorithm using only constant space?


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var two_index = 0;
    for (var i = 0, j = nums.length; i < j; ++i) {
        if (nums[i] !== 2) {
            nums[two_index++] = nums[i];
        }
    }
    var zero_index = two_index - 1;
    for (i = two_index - 1; i >= 0; --i) {
        if (nums[i] !== 0) {
            zero_index--;
        }
    }

    for (i = 0; i <= zero_index; i++) {
        nums[i] = 0;
    }
    for (; i < two_index; i++) {
        nums[i] = 1;
    }
    for (; i < nums.length; i++) {
        nums[i] = 2;
    }
};
