// primitive  (value type)
//7 types : string ,num,bool,null,undefined,symbol,BigInt 

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid);

//const bigNumber = 45678904567856785567n

// refrence type(non primitive)

// array,objects, Function

const heros = ["shaktiman", "naagraj" ,"yogi"];
let myobj = {
     name : "aryan",
     age : 22,
}

const myfunction = function() {
     console.log("hello");
}
console.log(typeof anotherid); //to check the datatype 
 