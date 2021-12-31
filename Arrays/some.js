// some => return true if someone in the array fulfill the criteria

let arr = [1, 3, 9, 15, 16, 21];

let isAnyEven = arr.some(function(v, i){
    if(v % 2 == 0) return true;
});

console.log(`Any Even element present in the array?? \n${isAnyEven}`);