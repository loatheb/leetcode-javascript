// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
//
//
// For example,
// Given [100, 4, 200, 1, 3, 2],
// The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.
//
//
// Your algorithm should run in O(n) complexity.


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 1) return 1;
    nums.sort(function (prev, curr) {
        if (curr >= prev) return -1;
        return 1;
    });
    var max = 1;
    var counter = 1;
    for (var i = 1, l = nums.length; i <= l - 1; ++i) {
        if (nums[i] === nums[i - 1]) continue;
        if (nums[i] - 1 === nums[i - 1]) {
            counter++;
        } else {
            diff = nums[i] - i;
            counter = 1;
        }
        max = Math.max(counter, max);
    }
    return max;
};

