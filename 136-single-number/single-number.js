// Given an array of integers, every element appears twice except for one. Find that single one.
//
//
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var single;
    for (var i = 0, l = nums.length; i < l; i++) {
        single ^= nums[i];
    }
    return single;
};
