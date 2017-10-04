// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
//
//
// Note:
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var first = m - 1;
    var second = n - 1;
    for (var i = m + n - 1; i >= 0; i--) {
        if (second < 0) {
            break;
        }
        if (nums1[first] > nums2[second]) {
            nums1[i] = nums1[first];
            first--;
        } else {
            nums1[i] = nums2[second];
            second--;
        }
        
    }
};
