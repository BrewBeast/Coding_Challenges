/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var prefix = "";
  if(strs.length === 0 || strs[0].length === 0){
    return prefix;
  }
  for(var i = 0; i < strs[0].length; i += 1){
    for(var j = 0; j < strs.length; j += 1){
      console.log('does ', strs[0][i], ' match ', strs[j][i], i)
      if(strs[0][i] === strs[j][i] && j === strs.length - 1){
        console.log('longer')
        prefix += strs[0][i];
      }else if(strs[0][i] !== strs[j][i]){
        return prefix;
      }
    }
  }
  return prefix;
};
