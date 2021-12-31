// function outer() {
//   var arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(function() {
//       console.log(i);
//     })
//   }
//   return arr;

// }
// console.log("before calling outer");
// var arr = outer();
// arr[0]();
// arr[1]();
// arr[2](); 
// console.log("Outer calling function");

/* How to fix this problem */

function outerMain() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    function inner(){
      var j = i;
      return function(){
        console.log(j);
      }
    }
    arr.push(inner());
  }
  return arr;
}
  
console.log("before calling outer");
var arr = outerMain();
arr[0]();
arr[1]();
arr[2](); 
console.log("Outer calling function");