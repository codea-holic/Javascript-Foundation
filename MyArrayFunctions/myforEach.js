Array.prototype.myforEach = function (cb){

    for(let i = 0; i < this.length; i++){
        let val = this[i];
        cb(val);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(v=>console.log(`5 * ${v} = ${v * 5}`));

console.log();
console.log("Output of My custom function of forEach");
arr.myforEach(v=>console.log(`5 * ${v} = ${v * 5}`));

