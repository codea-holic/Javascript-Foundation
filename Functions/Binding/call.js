Function.prototype.myCall = function(){
    let orgFun = this;
    let args = Array.from(arguments);
    let thisForCall = args[0];
    let params = args.slice(1);

    // orgFun.apply(thisForCall, params);

    // OR
    
    thisForCall.fun = orgFun;
    thisForCall.fun(...params);
    delete thisForCall.fun;
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
obj.fun.call(newOB, "Technia", "Delhi");
obj.fun.myCall(newOB, "Technia", "Delhi");

obj.fun();