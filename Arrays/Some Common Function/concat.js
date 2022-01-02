/*
Input:  My name is Sumeet Malik. I am a teacher. I teach programming.

short string callback should do the following:
Output: Malik Sumeet is name My. teacher a am I. programming teach I.
*/

let str = "My name is Sumeet Malik. I am a teacher. I teach programming.";


// let res = '';
// for(let i = 0; i < arr.length-1; i++){
//     let temp = arr[i].split(' ').reverse();
//     res += temp.join(' ') + '. ';
// }

let arr = str.split('.');
arr.splice(-1, 1);
arr.map((st, i, oarr) => oarr[i] = st.trim());
console.log(arr);

let res = arr.map(st => st.split(' '));
console.log(res);
res = res.map(a1 => a1.reverse());
console.log(res);

let res2 = res.map(str => str.join(' '));
console.log(res2);

let res3 = res2.map(s => s + ". ");
console.log(res3);

let final = res3.reduce((pv, cv) => pv + cv);
console.log(final);
