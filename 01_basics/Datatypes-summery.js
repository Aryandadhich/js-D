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
 
//+++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive type), Heap(non-primitive)

let myYoutubename = "aryandadhich"

let anothername = myYoutubename
anothername = "kuchkuch"
console.log(myYoutubename);
console.log(anothername);
// we get a copy in stack of variabel 

let userone = {
     email : "aryu@gmail.com",
     upi : "as@ybl",
}

let usertwo = userone
usertwo.email = "gyan@gmail.com"

console.log(userone.email);
console.log(usertwo.email)

// in heap we get a refrence like whatever we cahnge that cahnge will occur in original value

