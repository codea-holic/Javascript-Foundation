/* Question:1-
Count all the primes using reduce
*/

let arr = [51, 23, 37, 44, 73, 82, 97, 45];
// let arr = [50, 37];

let pc = 0;
// arr.filter(v => isPrime(v) ? pc++ : pc + 0);
// console.log(pc);

// Alternative,
pc = arr.reduce((pv, cv) => isPrime(cv) ? pv + 1 : pv, 0);
console.log(pc);

function isPrime(val) {

    let isPrime = true;
    for (let i = 2; i * i <= val; i++) {
        if (val % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

/* Question 2; 
flat the 2D array
*/

let arr2d = [[34, 56, 7], [], [3, 8], [9], 85, 86, [40, 50, 60]];

let flatArr = arr2d.reduce((pv, cv, i) => pv.concat(cv));
console.log(flatArr);
console.log(flatArr.length);
