// Given a non-empty array of integers, return the k most frequent elements.
//
// For example,
// Given [1,1,1,2,2,3] and k = 2, return [1,2].
//
//
// Note: 
//
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var hashMap = {};
    for (var i = 0, l = nums.length; i <= l - 1; ++i) {
        if (!hashMap[nums[i]]) {
            hashMap[nums[i]] = 1;
        } else {
            hashMap[nums[i]]++;
        }
    }
    var max = -Infinity;
    for (var item in hashMap) {
        max = Math.max(hashMap[item], max);
    }
    var result = [];
    for (i = max; i > 0; --i) {
        for (item in hashMap) {
            if (hashMap[item] === i && k > 0) {
                result.push(+item);
                k--;
            }
        }
    }
    return result;
};
