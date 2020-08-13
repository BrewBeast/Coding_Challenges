var addTwoNumbers = function(l1, l2){
    if(l1){
        if(l1.val === 10){
            console.log('need to carry')
          if(l1.next){
              console.log('passed along')
              l1.next.val += 1;
              l1.val = 0;
          }else if(l1.next === null){
              l1.val = 0;
              l1.next = {val: 1, next: null}
              console.log('new tail', l1)
          }
        }  
    }
    if(l1 && l2){
      var sum = l1.val + l2.val;
      if(sum >= 10){
          if(l1.next){
            l1.next.val +=1;
            sum -= 10;
          }else{
            l1.next = {val: 1, next: null}
            sum -= 10;
          }
      }
      return {val: sum, next: addTwoNumbers(l1.next, l2.next)}
    }else if(l1 || l2){
        console.log('single', l1? l1 : l2)
        return {val: l1 ? l1.val : l2.val, next: l1 ? addTwoNumbers(l1.next) : addTwoNumbers(l2.next)}
    }else{
        console.log('end')
        return null;
    }

}

