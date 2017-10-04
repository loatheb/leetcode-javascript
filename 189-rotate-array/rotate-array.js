// Rotate an array of n elements to the right by k steps.
// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4]. 
//
// Note:
// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
//
//
// [show hint]
// Hint:
// Could you do it in-place with O(1) extra space?
//
//
// Related problem: Reverse Words in a String II
//
// Credits:Special thanks to @Freezen for adding this problem and creating all test cases.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var rotated = [];
    var length = nums.length;
    if (length < k) {k = k % nums.length;}
      for (var i = length - k; i < length; i++) {
          rotated.push(nums[i]);
      }
      for (i = rotated.length - 1; i >= 0; i--) {
          nums.unshift(rotated[i]);
      }
      nums.length = length;
};
