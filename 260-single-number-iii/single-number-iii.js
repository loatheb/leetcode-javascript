// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.
//
//
// For example:
//
//
// Given nums = [1, 2, 1, 3, 2, 5], return [3, 5].
//
//
// Note:
//
// The order of the result is not important. So in the above example, [5, 3] is also correct.
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
//
//
//
// Credits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var hashMap  = {};
    for (var i = 0, l = nums.length; i <= l - 1; ++i) {
        if (!hashMap[nums[i]]) {
            hashMap[nums[i]] = 1;
        } else {
            hashMap[nums[i]]++;
        }
    }
    var result = [];
    for (var item in hashMap) {
        if (hashMap[item] === 1) {
            result.push(+item);
        }
    }
    return result;
};
