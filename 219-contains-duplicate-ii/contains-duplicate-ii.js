// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.


var containsNearbyDuplicate = function(nums, k) {
    const hashTab = {};
    for (var i = 0, l = nums.length; i < l; i++) {
        if (hashTab[nums[i]] !== undefined && (i - hashTab[nums[i]]) <= k && (i - hashTab[nums[i]]) !== 0) {
            return true;
        }
        hashTab[nums[i]] = i;
    }
    return false;
};
