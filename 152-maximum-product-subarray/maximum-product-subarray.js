// Find the contiguous subarray within an array (containing at least one number) which has the largest product.
//
//
//
// For example, given the array [2,3,-2,4],
// the contiguous subarray [2,3] has the largest product = 6.


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
        var max = nums[0];
        var cache = 1;
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] === 0){
                cache = 1;
                max = Math.max(max, 0);
            } else {
                cache *= nums[i];
                max = Math.max(max, cache);
            }
        }
        cache = 1;
        for ( i = nums.length - 1; i > 0; i--) {
            if (nums[i] === 0){
                cache = 1;
                max = Math.max(max, 0);
            } else {
                cache *= nums[i];
                max = Math.max(max, cache);
            }
        }
        return  max;
    }


