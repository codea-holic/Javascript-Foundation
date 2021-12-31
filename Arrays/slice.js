let arr = [1, 3, 2, 9, 12, 99, 17, 10, 38, 67, 23, 28, 66, 50, 23, 64];

// console.log(arr.length);
// let newarr = arr.slice();
// newarr.push(3333);
// console.log(newarr);
// console.log(arr);

/* Print all subarray using slice */

let temparr = [1, 3, 4, 5];

for(let i = 0; i < temparr.length; i++){
    for(let j = i+1; j <= temparr.length; j++){
        console.log(temparr.slice(i, j));
    }
    console.log();
}
