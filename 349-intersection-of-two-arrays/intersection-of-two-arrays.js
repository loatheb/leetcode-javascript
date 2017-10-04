// Given two arrays, write a function to compute their intersection.
//
//
// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
//
//
// Note:
//
// Each element in the result must be unique.
// The result can be in any order.


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const hashMap = {};
    const result = [];
    for (var i = 0, l = nums1.length; i < l; i++) {
        if (!hashMap[nums1[i]]) {
            hashMap[nums1[i]] = true;
        }
    }
    for (i = 0, l = nums2.length; i < l; i++) {
        if (hashMap[nums2[i]]) {
            hashMap[nums2[i]] = false
            result.push(nums2[i]);
        }
    }
    return result;
};
