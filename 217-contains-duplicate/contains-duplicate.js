// Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hashTab = {}
    for (var i = 0, l = nums.length; i < l; i++) {
        if (!hashTab[nums[i]]) {
            hashTab[nums[i]] = true;
        } else {
            return true;
        }
    }
    return false;
};
