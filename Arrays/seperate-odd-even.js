let arr = [1, 3, 2, 9, 12, 99, 17, 10, 38, 67, 23, 28, 66, 50, 23, 64];

let ans = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        ans.unshift(arr[i]);
    } else{
        ans.push(arr[i]);
    }
}

console.log(ans);