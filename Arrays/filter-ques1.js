let ages = [
    { Name: 'A', age: 14, gender: 'M' },
    { Name: 'B', age: 34, gender: 'F' },
    { Name: 'C', age: 68, gender: 'M' },
    { Name: 'D', age: 56, gender: 'F' },
    { Name: 'E', age: 24, gender: 'F' },
];

// Return the ages of all the ladies
let femAges = ages.filter((obj) => obj.gender == 'F').map((females) => females.age);

console.log(femAges);

// Question:1- 
let products = [
    { name: "Headphones", price: 125 },
    { name: "Earphone", price: 75 },
    { name: "USB-Cable", price: 115 },
    { name: "Mobile", price: 239 },
    { name: "Desktop", price: 86 },
]

// Return Names in Uppercase whose product price is >= 100 else in lowercase.
let res = products.map(v => {
    if (v.price >= 100) {
        return v.name.toUpperCase();
    } else {
        return v.name.toLowerCase();
    }
});

console.log(res);

// Question:2-
arr = [17, 2, 32, 14, 54, 26, 71];

// Return cubes whose square is less than 1000.
res = arr.filter(v => v * v < 1000).map(v => v * v * v);
console.log(res);