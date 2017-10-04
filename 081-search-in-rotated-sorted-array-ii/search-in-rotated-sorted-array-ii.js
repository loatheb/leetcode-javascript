// Follow up for "Search in Rotated Sorted Array":
// What if duplicates are allowed?
//
// Would this affect the run-time complexity? How and why?
//
// Write a function to determine if a given target is in the array.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
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
        } else if (nums[before] > nums[mid]){
            if (target >= nums[mid] && target <= nums[after]) {
                before = mid;
            } else {
                after = mid;
            }
        } else {
            before++;
        }
    }
    if (nums[before] === target) return true;
    if (nums[after] === target) return true;
    return false;
};
