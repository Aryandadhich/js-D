const score = 400
console.log(score)

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length); // find the length of the number
//console.log(balance.toFixed(1)); //tofixed is used for decimal value after point

const otherNumber = 230.678

//console.log(otherNumber.toPrecision(4));
//toprecision used for round off after decimal 

const hundreds = 100000
//console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++   MATH  ++++++++++++++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
console.log(Math.random());
//this will generate random number between 0 - 1
console.log((Math.random()*10) + 1);
//this will generate number from 0 -1 so we multiply this with ten and then add 1 so if it will take 
//.. floor value then also we got 1 

const min = 10 
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//this is the case where we give min and max from user side then we use this 
// using random values