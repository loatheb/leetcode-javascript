// Given an unsorted integer array, find the first missing positive integer.
//
//
//
// For example,
// Given [1,2,0] return 3,
// and [3,4,-1,1] return 2.
//
//
//
// Your algorithm should run in O(n) time and uses constant space.


/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var map = [];
    for (var i = 0, l = nums.length; i <= l - 1; ++i) {
        if (nums[i] > 0) {
            map[nums[i]] = true;
        }
    }
    for (i = 1, l = map.length; i <= l - 1; ++i) {
        if (!map[i]) {
            return i;
        }
    }
    return i;
};
