let arr = [2, 9, 18, 32, 74, 57, 63, 68];

// print the number which are even
let even = arr.filter(function (v, i) {
    if (v % 2 == 0) return true;
});
// console.log(even);

// odd includes all the odd number from the array -> arr
// It is short and compact
let odd = arr.filter(v => v % 2 != 0); // v goes to this function;

// console.log("GREAT!!");
// console.log(odd);

// Question
let ages = [
    { Name: 'A', age: 14, gender: 'M' },
    { Name: 'B', age: 34, gender: 'F' },
    { Name: 'C', age: 68, gender: 'M' },
    { Name: 'D', age: 56, gender: 'F' },
    { Name: 'E', age: 24, gender: 'F' },
];

// filter always return true or false for any value or object.
// let femAges = ages.filter(p => p.gender == 'F').map(p => p.age);

// This function is also return object(not ages) because filter return true
// or false and true value are appended to femAges;
let femAges = ages.filter(function (person, i) {
    if (person.gender == 'F'){
        return person.age;
    }
});



console.log(femAges);