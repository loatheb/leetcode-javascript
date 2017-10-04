// Given a sorted integer array without duplicates, return the summary of its ranges.
//
//
// For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
//
//
// Credits:Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.


/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 0) return [];
    
    var before = 0;
    var index = 0;
    var result = [];
    while(index < nums.length) {
        if(nums[index] - nums[before] !== (index - before)) {
            if (nums[index - 1] !== nums[before]) {
                result.push(nums[before] + '->' + nums[index - 1]);
            } else {
                result.push(nums[before] + '');
            }

            before = index;
        }
        index++;
        if (index === nums.length) {
            if (nums[before] === nums[index - 1]) {
              result.push(nums[index - 1] + '');
            } else {
              result.push(nums[before] + '->' + nums[index - 1])
            }
            return result;
        }
    }
};
