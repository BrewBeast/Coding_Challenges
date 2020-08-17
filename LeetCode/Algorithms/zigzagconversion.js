/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows == 1){
      return s;
  }
  var output = "";
  var zig = {}
  var count = 0;
  var forward = true;
  for(var i = 0; i < numRows; i += 1){
    zig[i] = "";
  }
  for(var j = 0; j < s.length; j += 1){
    if(forward && count == numRows - 1){
      zig[count] += s[j];
      forward = false;
      count -= 1;
    }else if(forward){
      zig[count] += s[j];
      count += 1;
    }else if(count == 0){
      zig[count] += s[j]
      forward = true;
      count += 1;
    }else{
      zig[count] += s[j];
      count -= 1;
    }
  }
  console.log(zig)
  for(var k = 0; k < numRows; k += 1){
    output += zig[k];
  }
  return output;
};
