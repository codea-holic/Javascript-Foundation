// Bhai array ka bhi function ban jata hai...
// isse ghabrana wali koi baat nhi hai 😀
let arr = [f, g, h];

/*
These are also a method of declaring function and arrays
let arr = [(x) => x * x, (x) => x * 10, (x) => x / 5];
let f = (x) => x * x;
let g = (x) => x * 10;
let h = (x) => x / 5;

*/

let val = arr.reduce(function (pv, cv, i) {
    let val = cv(pv);
    return val;
}, 10);

console.log(`Value of ${val}`);



function f(x) {
    return x * x;
}

function g(x) {
    return 10 * x;
}

function h(x) {
    return x / 5;
}

// ques- h(g(f(5)));
let ans = arr.reduce((pv, cv, i) => cv(pv), 5);
console.log(`Answer is ${ans}`);

// ques - f(g(h(x)))
ans = arr.reduce((pv, cv) => cv(pv), 10);
console.log(`Answer is ${ans}`);

// 10, f
// f(10), g
// g(f(10)), h
// h(g(f(10))) -> its easy but we required f(g(h(x)));

// We can use reduce by reversing array or also we can use reduceRight()