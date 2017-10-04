// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).
//
// Example 1:
//
// Input: [3, 2, 1]
//
// Output: 1
//
// Explanation: The third maximum is 1.
//
//
//
// Example 2:
//
// Input: [1, 2]
//
// Output: 2
//
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
//
//
//
// Example 3:
//
// Input: [2, 2, 3, 1]
//
// Output: 1
//
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.


/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var hashMap = {};
    var j = 0;
    for (var i = 0, l = nums.length; i < l; i++) {
        if (!hashMap[nums[i]]) {
            hashMap[nums[i]] = true;
        } else {
            continue;
        }
        nums[j++] = nums[i];
    }
    nums.length = j;
    var result = -Infinity;
    if (j < 3) {
        for (var i = 0; i < j; ++i) {
            result = Math.max(result, nums[i]);
        }
        return result;
    } else {
        nums.sort(function (prev, next) {
            if (next >= prev) return -1;
            return 1;
        });
        return nums[j - 3]
    }
};
