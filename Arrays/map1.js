arr = [1, 2, 3, 4, 5, 6, 7]

let cubes = arr.map(function(v, i, arr){
    return v*v*v;
})

/* Question 1
Print initial of all the name. eg: Sumeet Malik -> S.M.
*/

let names = ['Sumeet Malik', 'Rahul Malik', 'Roshan Gupta',
 'Saurav Kalia', 'Ganesh Yadav', 'Mangal Yadav'];

let initial = names.map((fullName, i, names)=>{
    let short = fullName.split(' ')[0][0] + "." + fullName.split(' ')[1][0] +".";
    return short;
});

// console.log(initial);

/* Question 2
Find all the females which are fall in range of 20 to 30 ages, return true or false.
*/

let info = [
    {
        gender: 'M',
        age: 34,
    },
    {
        gender: 'F',
        age: 24,
    },
    {
        gender: 'M',
        age: 32,
    },
    {
        gender: 'F',
        age: 14,
    },
    {
        gender: 'F',
        age: 22,
    },
    {
        gender: 'F',
        age: 27,
    },
    {
        gender: 'F',
        age: 24,
    },
    {
        gender: 'M',
        age: 44,
    },
    {
        gender: 'F',
        age: 80,
    },
    {
        gender: 'F',
        age: 36,
    },
    {
        gender: 'F',
        age: 26,
    },
    {
        gender: 'F',
        age: 30,
    },
]

console.log(info.length);

let findFemales = info.map((detail, idx, orgArr)=>{
    if(detail.gender == 'F' && detail.age >= 20 && detail.age <= 30){
        return true;
    } else{
        return false;
    }
});

/* findfemales = info.map((detail, idx, arr)=> detail.gender == 'F' && detail.age >= 20 && detail.age <= 30) */

console.log(findFemales);
