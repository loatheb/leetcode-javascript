// Follow up for "Remove Duplicates":
// What if duplicates are allowed at most twice?
//
//
// For example,
// Given sorted array nums = [1,1,1,2,2,3],
//
//
// Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var lock = 1;
    var j = 0;
    for (var i = 1, l = nums.length; i < l; i++) {
        if (nums[i] !== nums[j]) {
            nums[++j] = nums[i];
            lock = 1;
        } else {
            if (lock < 2) {
                nums[++j] = nums[i];
                lock++;
            } else {
                continue;
            }
        }
    }
    nums.length = j + 1;
    return j + 1;
};
