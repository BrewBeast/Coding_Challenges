/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits){
        return [];
    }
    var lexicon = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    }

    var combos = [];

    for(var i = 0; i < digits.length; i +=1){
//       console.log(lexicon[digits[i]])
      console.log(i)
      if(!lexicon[digits[i]]){
        return [];
      }
      if(combos.length == 0){
        lexicon[digits[i]].forEach((c) => combos.push(c));
      }else{
        var newCombo = [];
        for(var j = 0; j < lexicon[digits[i]].length; j += 1){
          combos.forEach((c) => newCombo.push(c + lexicon[digits[i]][j]));
//           console.log(newCombo)
        }
        combos = newCombo;
      }
    }

    return combos;
};
