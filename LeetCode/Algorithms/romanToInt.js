/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var total = 0;
  for(var i = 0; i < s.length; i += 1){

    console.log(total);
    
    if(s[i] === "M"){
      total += 1000;
    }else if(s[i] === "D"){
      total += 500;
    }else if(s[i] === "C"){
      if(s[i+1] === "D" || s[i+1] === "M"){
        console.log(s[i+1])
        total -= 100;
      }else{
        total += 100;
      }
    }else if(s[i] === "L"){
      total += 50;
    }else if(s[i] === "X"){
      if(s[i+1] === "L" || s[i+1] === "C" || s[i+1] === "D" || s[i+1] === "M"){
        total -= 10;
      }else{
        total += 10;
      }
    }else if(s[i] === "V"){
      total += 5;
    }else if(s[i] === "I"){
      if(s[i+1] !== "I" && s[i+1] !== undefined){
        total -= 1;
      }else{
        total += 1;          
      }
    }
  }
  return total;
};
