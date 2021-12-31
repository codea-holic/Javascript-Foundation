
// 27-10-2021
// reduce return only value by taking two inputs from given
// array and one value as index  
let arr = [10, 20, 30, 40, 50];
let val = arr.reduce(function(pv, cv, ci){
    return pv + cv;
});
console.log(val);

let val2 = arr.reduce((pv, cv, i) => pv * cv);
console.log(val2);

let val3 = arr.reduce(function(pv, cv, i){
    return pv + cv;
})
console.log(val3);

// Here 5 is pass as initial value;
let val4 = arr.reduce((pv, cv, i) => pv + cv, 5);
console.log(val4);

let singleArr = [45];
let check = singleArr.reduce((pv, cv, i) => pv * cv, 9);
console.log(check);

let arr2d = [
    [10, 20, 30],
    [22, 17],
    [54, 58, 82, 34],
    [61, 33, 78, 90],
    [100]
]


// concat function adds both arrays element into single array
let arr1d = arr2d.reduce((pv, cv, i) => pv.concat(cv));
console.log(arr1d);

