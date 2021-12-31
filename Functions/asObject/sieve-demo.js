
const fs = require("fs");

Array.prototype.seive = seive;

function seive(phandler, nphandler){
    
    // 
    orgArr = this;

    // function as object
    phandler.calledFirst = true;
    nphandler.calledFirst = true;

    for(let i = 0; i < orgArr.length; i++){

        let num = orgArr[i];
        let isPrime = true;
        if(num < 2){
            isPrime = false;
        }
        console.log("checking for number" + num);
        for(let div = 2; div * div <= num; div++){
            
            if(num % div == 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime == true) phandler(num);
        else nphandler(num);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
             17, 18, 19, 20, 21, 22, 23, 24, 25];

function phandler(num){
    fs.appendFileSync('prime.txt', num + "\n", "utf-8");
}

function nphandler(num){
    fs.appendFileSync('non-prime.txt', num + "\n", "utf-8");
}

arr.seive(phandler, nphandler);


