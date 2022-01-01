let strs = ['hello', 'bello', 'bye', 'there', 'pep', 'nados'];
let nums = [189, 11, 38, 88, 2, 90, 123, 442, 8, 19, 1, 77, 209];

// TODO: Sort and reverse

// strs.sort().reverse()
// console.log(strs);

// this is working like radix sort
nums.sort()     // for alphabetical sort
console.log(nums);

// OPINION: may be its take all arguments of nums as string.

// How to Fix ?? 🤔🤔💭
nums.sort((a, b) => a - b); // for numerical sort
console.log(nums);

// strs.sort((a, b) => a - b); // this will not do anything in string array
// console.log(strs);
