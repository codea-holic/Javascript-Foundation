/*
Input:  My name is Sumeet Malik. I am a teacher. I teach programming.

short string callback should do the following:
Output: Malik Sumeet is name My. teacher a am I. programming teach I.
*/

let str = "My name is Sumeet Malik. I am a teacher. I teach programming.";

let arr = str.split('.');
let res = '';
for(let i = 0; i < arr.length-1; i++){
    let temp = arr[i].split(' ').reverse();
    res += temp.join(' ') + '. ';
}
console.log(res);