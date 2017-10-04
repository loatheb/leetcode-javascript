// Given an integer array of size n, find all elements that appear more than &lfloor; n/3 &rfloor; times. The algorithm should run in linear time and in O(1) space.
//
//
//   How many majority elements could it possibly have?
//   Do you have a better hint? Suggest it!


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if (nums.length === 0) return [];
    if (nums.length === 1) return nums;
    const hashmap = {};
    const result = [];
    var lock = [];
    for (var i = 0, l = nums.length; i < l; i++) {
        if (hashmap[nums[i]] === undefined) {
            hashmap[nums[i]] = 1;
        } else {
            hashmap[nums[i]]++;
        }
        if (!lock[nums[i]]){
            if (hashmap[nums[i]] > Math.floor(nums.length / 3)) {
                result.push(nums[i]);
                lock[nums[i]] = true;
            }
        }
    }
    return result;
};
