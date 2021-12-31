
// Date => 26-10-2021

let arr = [1, 3, 5, 7 , 9, 11];

// let resultArr = arr.map(function(v, i){
//     return v * v * v;
// });


let resultArr = arr.map((v, i) => {return v * v * v});

// console.log(resultArr);

// .NET => lambda, Java => lambda, Javascript => Arrow function.

let names = ['Sumeet Malik', 'Rahul Malik', 'Roshan Gupta',
 'Saurav Kalia', 'Ganesh Yadav', 'Mangal Yadav'];

 console.log(names);
 let resName = names.map((n, i) => {
     let fL = n[0];
     let Ln = n[1];
     return fL + '. ' + Ln;
 });

 console.log(resName);