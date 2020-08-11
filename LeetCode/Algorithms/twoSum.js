/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target){
    var sums = [];
    for(i = 0; i < nums.length; i += 1){
        for(j = 0; j < nums.length; j += 1){
            if(i !== j && nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
}

module.exports = twoSum;