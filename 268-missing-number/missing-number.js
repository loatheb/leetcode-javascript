// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
//
//
// For example,
// Given nums = [0, 1, 3] return 2.
//
//
//
// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
//
//
// Credits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var length = nums.length;
    var sum = (0 + length + 1) * (length) / 2;
    for (var i = 0; i < length; i++) {
        sum -= nums[i];
    }
    return sum;
};
