// Given a collection of integers that might contain duplicates, nums, return all possible subsets.
//
// Note: The solution set must not contain duplicate subsets.
//
//
// For example,
// If nums = [1,2,2], a solution is:
//
//
//
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    if (nums.length === 0) return nums;
    var len = nums.length;
    var count = Math.pow(2, len);
    var hashMap = {};
    var result = [];
    for (var i = 0; i < count; i++) {
        var str = i.toString(2);
        var strLen = str.length;
        
        var subset = [];
        var prefix = len - strLen;
        for (var index = 0; index < strLen; index++) {
            if (str[index] === '1') {
                var subsetItem = nums[index + prefix];
                    subset.push(subsetItem);
                }
            }
        subset.sort();
        if (!hashMap[subset]) {
            result.push(subset);
            hashMap[subset] = true;
        
        }
    }
    return result;
};
