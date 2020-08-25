/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    for(var i = 0; i < height.length; i += 1){
        for(var j = height.length - 1; j > 0; j -= 1){
//             console.log("volume between ", i, " at a height of ", height[i], " and ", j, "at a height of ", height[j], " with a distance between the two of", j -i, " is ", Math.abs(j - i) * (height[j] < height[i] ? height[j] : height[i]))
            if(Math.abs(j - i) * (height[j] < height[i] ? height[j] : height[i]) > max){
                max = Math.abs(j - i) * (height[j] < height[i] ? height[j] : height[i]);
            }
        }
    }
    return max;
}; 
