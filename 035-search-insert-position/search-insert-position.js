// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//
// You may assume no duplicates in the array.
//
//
// Here are few examples.
// [1,3,5,6], 5 &#8594; 2
// [1,3,5,6], 2 &#8594; 1
// [1,3,5,6], 7 &#8594; 4
// [1,3,5,6], 0 &#8594; 0


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var len = nums.length;
    var low = 0;
    var high = len - 1;
    var mid;
    while (low <= high) {
        mid = low + Math.floor((high - low) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
    
};
