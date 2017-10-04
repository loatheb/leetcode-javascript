// Suppose a sorted array is rotated at some pivot unknown to you beforehand.
//
// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
//
// You are given a target value to search. If found in the array return its index, otherwise return -1.
//
// You may assume no duplicate exists in the array.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var before = 0;
    var after = nums.length - 1;
    var mid;
    while(before < after - 1) {
        mid = before + Math.floor((after - before) / 2);
        if (nums[before] < nums[mid]) {
            if (target >= nums[before] && target <= nums[mid]) {
                after = mid;
            } else {
                before = mid;
            }
        } else {
            if (target >= nums[mid] && target <= nums[after]) {
                before = mid;
            } else {
                after = mid;
            }
        }
    }
    if (nums[before] === target) return before;
    if (nums[after] === target) return after;
    return -1;
};
