// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
//
// Solve it without division and in O(n).
//
// For example, given [1,2,3,4], return [24,12,8,6].
//
// Follow up:
// Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var len = nums.length;
    var left_product = [];
    left_product[0] = 1;
    for (var i = 1; i < len; ++i) {
       left_product[i] = left_product[i - 1] * nums[i - 1]; 
    }
    var result = [];
    var right_product = 1;
    for (i = len - 1; i >= 0; i--) {
        result[i] = left_product[i] * right_product;
        right_product *= nums[i];
    }
    return result;
};
