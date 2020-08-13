/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var longest = "";
    for(j = 0; j < s.length; j += 1){
        var sub = "";
    for(i = j; i < s.length; i += 1){
        if(!sub.includes(s[i])){
            sub += s[i];
            if(s.includes(sub)){
                if(longest < sub.length){
                longest = sub.length;    
                }
            }else{
                break;
            }
        }else{
            break;
        }
    }        
    }
  return longest;
};
