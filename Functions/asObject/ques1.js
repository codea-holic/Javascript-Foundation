/*
Question 1:- Add a func to all arrays which takes as Input two callbacks.
one for small string(< 50 in length) and the other for long strings
Input:  My name is Sumeet Malik. I am a teacher. I teach programming.

short string callback should do the following:
Output: Malik Sumeet is name My. teacher a am I. programming teach I.

long string callback should do the following
Output: I teach programming. I am a teacher. My name is Sumeet Malik.

*/

String.prototype.invert = invert;

function invert(invertWord, invertphrase){
    
    let thisStr = this;
    if(thisStr.length < 100){
        invertWord(thisStr);
    } else{
        invertphrase(thisStr);
    }
    
    // This will help you in chaining function.
    return this;
}

function invertWord(str){

    let sentences = str.split(".");
    let temp = "";
    console.log(sentences);
    for(let i = 0; i < sentences.length; i++){
        let words = sentences[i].split(" ");
        for(let j = words.length - 1; j >= 1; j--){
            temp = temp + words[j];
            if(j > 1){
                temp = temp + " ";
            } 
        }
        temp = temp + ". ";
    }

    console.log("Less than 50.");
    console.log(temp);
}

function invertphrase(str){
    
    let sentences = str.split(".");
    let result = "";
    for(let i = sentences.length-2; i >= 0; i--){
        result = result + sentences[i] + ".";
    }
    console.log("Length greater than 50.");
    console.log(result);
}

let testStr = "I'm a noob programmer";
let test3 = " My name is Sumeet Malik. I am a teacher. I teach programming."
let test2 = " My name is Sumeet Malik. I am a teacher. I teach programming. Sir maine String.prototype me add kiya tha. Sir maine String. prototype me add kiya tha";

testStr.invert(invertWord, invertphrase);
// console.log();
// test2.invert(invertWord, invertphrase);
// console.log();
// test3.invert(invertWord, invertphrase);
// test2.invert();