// Given an array of size n, find the majority element. The majority element is the element that appears more than &lfloor; n/2 &rfloor; times.
//
// You may assume that the array is non-empty and the majority element always exist in the array.
//
// Credits:Special thanks to @ts for adding this problem and creating all test cases.


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
        var major = nums[0], count = 1;
        for(var i = 1, l = nums.length; i < l; i++){
            if(count === 0){
                count++;
                major = nums[i];
            }else if(major === nums[i]){
                count++;
            }else count--;
            
        }
        return major;
};
