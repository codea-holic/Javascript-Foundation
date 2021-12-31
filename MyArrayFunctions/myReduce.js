Array.prototype.myreduce = function (cb, pv) {

    let res;
    let cv;
    let idx;
    if (this.length == 1) {
        let cv = this[0];
        if (typeof pv == 'undefined') pv = 0;
        res = cb(pv, cv, 0, this);
        return res;
    } else {
        if (typeof pv == 'undefined') {
            pv = this[0];
            idx = 1;
        } else {
            idx = 0;
        }
        for (let i = idx; i < this.length; i++) {
            cv = this[i];
            res = cb(pv, cv, i, this);
            pv = res;
        }
        return res;
    }
}


arr = [5, 10, 9, 18, 12, 0, 1, 4];

// let redres = arr.reduce((pv, cv, i) => console.log(`P = ${pv}, cv = ${cv}, i = ${i}`));
let redres = arr.reduce((pv, cv, i) => pv * cv * i);

// console.log();
// console.log("My result");
// let myredres = arr.myreduce((pv, cv, i) => console.log(`P = ${pv}, cv = ${cv}, i = ${i}`));
let myredres = arr.reduce((pv, cv, i) => pv * cv * i);

console.log(redres);
console.log(myredres);