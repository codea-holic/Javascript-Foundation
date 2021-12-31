Function.prototype.myapply = function(){
    let orgFun = this;
    let args = Array.from(arguments);
    let tempObj = args[0];
    let params = args[1];

    tempObj.fun = orgFun;
    tempObj.fun(...params);
    delete tempObj.fun;
}

var obj = {
    fname: "Ganesh",
    lname: "Singh",
    fun: function (){
        console.log("The person names", this.fname + " " + this.lname);
        console.log("He/She study in", arguments[0], arguments[1]);
    }
}

var newOB = {
    fname: "Anisha",
    lname: "Yadav"
}
console.log();

//function borrowing
obj.fun.apply(newOB, ["Technia", "Delhi"]);
obj.fun.myapply(newOB, ["Technia", "Delhi"]);

obj.fun();