// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
// Note: The solution set must not contain duplicate triplets.
//
//
// For example, given array S = [-1, 0, 1, 2, -1, -4],
//
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


var threeSum = function(nums) {
    var result = [];
    var hashMap = {};
    nums.sort(function (prev, curr) {
        if (prev >= curr) return 1;
        return -1;
    });
    var before = 0;
    var len = nums.length;

    for (; before <= len - 2; ++before) {
      if (before > 0 && nums[before] === nums[before - 1]) {
        continue;
      }
        var a = nums[before];
        var start = before + 1;
        var end = len - 1;
        while (start < end) {
          if (start > before + 1 && nums[start - 1] === nums[start]) {
              start++;
              continue;
            }
            if (end < len - 1 && nums[end + 1] === nums[end]) {
              end--;
              continue;
            }
            var b = nums[start];
            var c = nums[end];
            if (a + b + c === 0) {
                result.push([a, b, c]);
                end--;
            } else if (a + b + c > 0) {
                end--;
            } else {
                start++;
            }
        }
    }
    return result;
};
