// Suppose a sorted array is rotated at some pivot unknown to you beforehand.
//
// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
//
// Find the minimum element.
//
// You may assume no duplicate exists in the array.


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var left_point = 0;
    var right_point = nums.length - 1;
    var mid;
    while(left_point < right_point - 1) {
        mid = left_point + Math.floor((right_point - left_point) / 2);
        if (nums[mid] < nums[right_point]) {
            right_point = mid;
        } else {
            left_point = mid;
        }
    }
    if (nums[left_point] > nums[right_point]) {
        return nums[right_point];
    }
    return nums[left_point];
};
