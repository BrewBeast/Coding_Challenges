/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    var arr = nums1.concat(nums2).sort(function(a,b) { return a - b; });
    console.log(arr)
    if(arr.length % 2){
      return arr[Math.floor(arr.length / 2)];
    }else{
      return (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2
    }
    var sum = arr.reduce(function(a,b){return a+b;})
    console.log('length: ', arr.length, 'sum: ', sum)
    return sum/(arr.length)
};
