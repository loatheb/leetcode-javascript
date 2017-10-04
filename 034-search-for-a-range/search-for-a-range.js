// Given a sorted array of integers, find the starting and ending position of a given target value.
//
// Your algorithm's runtime complexity must be in the order of O(log n).
//
// If the target is not found in the array, return [-1, -1].
//
//
// For example,
// Given [5, 7, 7, 8, 8, 10] and target value 8,
// return [3, 4].


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var res = [];
    var low = 0;
    var high = nums.length - 1;
    var mid;
    while (low <= high) {
        mid = low + Math.floor((high - low) / 2);
        if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    if (low < nums.length && nums[low] === target) {
        res.push(low);
    } else {
        return [-1, -1];
    }
    low = low;
    high = nums.length - 1;
    while(low <= high) {
        mid = low + Math.floor((high - low) / 2);
        if (nums[mid] <= target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    res.push(high);
    return res;
};
