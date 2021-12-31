Array.prototype.myEvery = function (cb) {

    for (let i = 0; i < this.length; i++) {
        if (!cb(this[i])) {
            return false;
        }
    }
    return true;
}

let arr = [1, 3, 9, 15, 17, 21];

let isallOdd = arr.every(v => v % 2 == 1);
console.log(`is there all odd in array? ${isallOdd}`);

let myisallOdd = arr.myEvery(v => v % 2 == 1);
console.log(`is there all odd in array? ${myisallOdd}`);