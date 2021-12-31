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

console.log(arr.splice(0,1));

for(let i = arr.length - 1; i >= 0; i--){
    if(!isPrime(arr[i])){
        arr.splice(i,1);
    }
}

console.log(arr);