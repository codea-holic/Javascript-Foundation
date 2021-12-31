if (null) {
  console.log('Practice starts');
} else if (undefined) {
  console.log('You are already very late!');
}

let value = !undefined || 'inserted';

console.log(value);
console.log(typeof value);

let i = 1; // 2 -> 3
let j = 10; // 11 -> 12
// (11 + 2) = 13
// 2 + 11 = 13

if (i++ - j < j++ && (j++ + i++) % 11 == 0 || i-- + --j == 13) {
  console.log('Then it will be printed');
  console.log(`i = ${i} j = ${j}`);
} else {
  console.log('Given result is found falsy');
  console.log(`i = ${i} j = ${j}`);
}

/* Difference between var and let ?? */


