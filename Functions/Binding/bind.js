
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