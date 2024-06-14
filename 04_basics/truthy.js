const useremail = "aryan@gmail.com"

if(useremail)
    {
        console.log("got user email");
    }
else{
    console.log("dont have user email");
}

//flasy value
//(false , 0 , -0, BigInt 0n , "" , null , undefined, NAN)

//truthy value
// "0",'false', " " ,[] , {} , function(){}

//nullish coalescing operator (??): null undefines

let val1;
val1 = 5?? 2
val2 = null ?? 10

var1 = undefined ?? 15
console.log(var1);

// terniary operator 

//condition ? true : false

const iceteaprice = 100
iceteaprice <= 80 ? console.log("less then 80") : console.log("more than 80")