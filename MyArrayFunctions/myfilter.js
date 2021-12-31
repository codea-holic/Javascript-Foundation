Array.prototype.myFilter = function (cb) {

    let res = [];

    for (let i = 0; i < this.length; i++) {
        let val = this[i];
        let retVal = cb(val, i, this);
        if (retVal)
            res.push(val);
    }
    return res;
}

let arr = [1, 0, 4, 6, 8, 10, 3, 5, 7, 9, 11];

let resEven = arr.filter((v) => v % 2 == 0);
console.log(resEven);

let myresEven = arr.myFilter((v) => v % 2 == 0);
console.log(myresEven);

let resodd = arr.filter((v) => v % 2 != 0);
console.log(resodd);

let myresodd = arr.myFilter((v) => v % 2 != 0);
console.log(myresodd);