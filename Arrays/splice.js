let arr = [34, 7, 11, 19, 25, 18, 27, 37];

function isPrime(num){

    let isPrime = true;
    for(let i = 2; i * i <= num; i++){
        if(num % i == 0){
            isPrime = false;
        }
    }

    return isPrime;
}

// This is used for custom functions.
// splice -> 1st arg => knha se remove krna hai
//           2nd arg => kitne numbers ko remove krna hai (offset)
console.log(arr.splice(-1,1));

for(let i = arr.length - 1; i >= 0; i--){
    if(!isPrime(arr[i])){
        arr.splice(i,1);     
    }
}

console.log(arr);