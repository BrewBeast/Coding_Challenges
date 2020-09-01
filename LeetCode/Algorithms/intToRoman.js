/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var Roman = "";  
  var I = 1;
  var V = 5;
  var X = 10;
  var L = 50;
  var C = 100;
  var D = 500;
  var M = 1000;

  while(num >= 900){
    if(num >= 900 && num < 1000){
      Roman += "CM"
      num -= 900;
    }else{
      Roman += "M"
      num -= 1000;
    }
  }
  console.log('after thousands ', num, ' is left')
  //thousands taken care of

  while(num >= 400){
    if(num >= 400 && num < 500){
      Roman += "CD"
      num -= 400;
    }else{
      Roman += "D"
      num -= 500;
    }
  }
  console.log('after five hundreds ', num, ' is left')
  //five hundreds taken care of

  while(num >= 90){
    if(num >= 90 && num < 100){
      Roman += "XC"
      num -= 90;
    }else{
      Roman += "C"
      num -= 100;
    }
  }
  console.log('after hundreds ', num, ' is left')

  while(num >= 40){
    if(num >= 40 && num < 50){
      Roman += "XL"
      num -= 40;
    }else{
      Roman += "L"
      num -= 50;
    }
  }
  console.log('after fifties ', num, ' is left')

  while(num >= 9){
    if(num >= 9 && num < 10){
      Roman += "IX"
      num -= 9;
    }else{
      Roman += "X"
      num -= 10;
    }
  }
  console.log('after tens ', num, ' is left')

  while(num >= 4){
    if(num >= 4 && num < 5){
      Roman += "IV"
      num -= 4;
    }else{
      Roman += "V"
      num -= 5;
    }
  }
  console.log('after fives ', num, ' is left')

  while(num >= 1){
    Roman += "I"
    num -= 1;
  }
  console.log('after hundreds ', num, ' is left')



  return Roman;
};
