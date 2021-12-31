Array.prototype.myMap = function (callback) {

    let res = [];


    for (let i = 0; i < this.length; i++) {
        let val = this[i];
        let retVal = callback(val, i, this);
        res.push(retVal);
    }
    return res;
}

let arr = [
    1, 2, 3, 4,
    5, 6, 7, 8, 9, 10
]

let values = arr.myMap((v, i) => v * v * v);

console.log(values);

