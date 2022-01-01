/* Question:1
Union of Array
*/
let arr = [[23, 77, 45, 34, 90], [34, 12, 15, 90], [45, 34, 8, 90], [64, 34, 90], [77, 23, 34, 90], [90, 8, 34], [15, 90, 34]];

// let a1 = arr[0], a2 = arr[1];

let UnionofTwo = arr.reduce((pv, cv) => {
    // let res = pv;
    let fromCv = cv.filter(v => !pv.includes(v));
    // console.log(res + " -> " + fromCv);

    return pv.concat(fromCv);
});

// 23, 77, 45, 34, 90 -> 12, 15
// 23, 77, 45, 34, 90, 12, 15 -> 8
// 23, 77, 45, 34, 90, 12, 15, 8 -> 64
// 23, 77, 45, 34, 90, 12, 15, 8, 64 -> 
// 23, 77, 45, 34, 90, 12, 15, 8, 64 -> 
// return values
// 23, 77, 45, 34, 90, 12, 15, 8, 64 

console.log(UnionofTwo);
// agar is code ko dekhe to yeh keh skte hai ki agar pehle array me values repeat hogi to 
// ye code phat jayega.

/* Question:2
Intersection of Array
*/

let Intersection = arr.reduce((pv, cv) => {
    // below code find the intersion of two arrays, after filtering those values in array, it return to previous (pv).
    return pv.filter(v => cv.includes(v));
});

console.log(Intersection);