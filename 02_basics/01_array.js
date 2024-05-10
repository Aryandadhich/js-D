const myArr = [0,1,2,3,4,5]

//console.log(myArr[0]);

//Array methods

// myArr.push(6)
// myArr.pop()// delete by default last value
// console.log(myArr);

// myArr.unshift(9) 
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(20));

const newArr = myArr.join(); // convert in string and give comma seprated values 
//console.log(newArr);
//console.log(myArr);

//slice , splice

console.log("A" , myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B" , myArr);

const myn2 = myArr.splice(1,3)
console.log("C" , myArr);

console.log(myn2)
// The main difference between slice and splice is the array will be same in slice 
//.. but in splice the original array will manupulate 
//.. the given range value exclude from that array in Splice
