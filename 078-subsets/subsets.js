// Given a set of distinct integers, nums, return all possible subsets.
//
// Note: The solution set must not contain duplicate subsets.
//
//
// For example,
// If nums = [1,2,3], a solution is:
//
//
//
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]


var subsets = function(nums) {
    if (nums.length === 0)
        return [];
        
    var len = nums.length,
        count = Math.pow(2, len),
        result = [];
        
    for (var i = 0; i < count; i++) {
        // to binary string
        var str = i.toString(2);
        
        // get one subset from binary string
        var subset = [];
        // iterate the string from back to front since our binary string is
        // e.g.: "11" instead of "011" when i = 3 
        for (var k = str.length - 1; k >= 0; k--) {
            if (str[k] == '1')
                subset.unshift(nums[len - str.length  + k]);
        }
        
        result.push(subset);
    }
    
    return result;
};
