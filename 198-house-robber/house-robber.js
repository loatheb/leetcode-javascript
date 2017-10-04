// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
//
// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
//
// Credits:Special thanks to @ifanchu for adding this problem and creating all test cases. Also thanks to @ts for adding additional test cases.


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var len = nums.length;
    if (len === 0) return 0;
    if (len === 1) return nums[0];
    
    var max = 0;
    var pre = 0;
    for (var i = len - 1; i >= 0; --i) {
        var preMax = max;
        max = Math.max(max, pre+nums[i]);
        pre = preMax;
    }
    return max;
};
