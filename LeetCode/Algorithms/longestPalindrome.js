/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if(s.length > 999){
      s = s.slice(0, 1000);
  }
  var longest = "";
  for(var i = 0; i < s.length; i += 1){
    for(var j = s.length; j >= 0; j -= 1){
      if(j - i > longest.length && s[i] === s[j - 1] && isPalindrome(s.slice(i, j))){
        longest = s.slice(i, j);
      }
    }
  }
  return longest;
};

var isPalindrome = function(x){
  for(var k = 0; k < x.length; k += 1){
    if(x[k] !== x[x.length - k- 1]){
      return false;
    }
  }
  return true;
}
