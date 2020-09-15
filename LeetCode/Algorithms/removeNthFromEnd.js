/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//HELPER FUNCTIONS
// var tail = function(head) {
//   if(head.val === null){
//     return null;
//   }
//   if(head.next === null){
//     console.log("tail", head.val)
//     return head.val
//   }else{
//     console.log('deeper', head.val)
//     return tail(head.next)
//   }
// }

// var addTail = function(head, tail) {
//   if(head.val === undefined){
//     head = {val: tail, next: null}
//     return head;
//   }
//   if(head.next === null){
//     head.next = {val: tail, next: null}
//     return head.next
//   }else{
//     return addTail(head.next, tail)
//   }
// }
/******************************************/


var removeNthFromEnd = function(head, n) {

  if(!head){
    return null;
  }
  
  //getting length of Linked List
  var count = 0;
  var getLength = function (head) {
    if(head){
      count += 1;
      getLength(head.next)
    }else{
      return;
    }
  }
  getLength(head)
  count -= (n);

  //removing node
  var removeNode = function(head){
    if(head === null){
      return null;
    }
    if(count === 0){
      count -= 1;
      return removeNode(head.next)
    }else if(head.next === null){
      return {val: head.val, next: null} 
    }
    else{
      count -= 1;
      return {val: head.val, next: removeNode(head.next)}
    }
  }

  var answer = removeNode(head)

  return answer;
};

var test1 = {val: 1, next: {val:2, next: {val:3, next: {val:4, next: {val:5, next: null}}}}}
var test2 = {val: 1, next: null}
