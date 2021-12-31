Array.prototype.mySome = function (cb) {

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            return true;
        }
    }
    return false;
}

let arr = [1, 3, 9, 15, 16, 21];

let isanyEven = arr.some(v => v % 2 == 0);
console.log(`is there any even in array? ${isanyEven}`);

let myisanyEven = arr.mySome(v => v % 2 == 0);
console.log(`is there any even in array? ${myisanyEven}`);