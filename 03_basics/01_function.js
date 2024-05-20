function saymyname(){
    console.log("aryan");
}

//saymyname()

// function addtwonumber (number1 , number2)
// {
//     console.log(number1 + number2)
// }

function addtwonumber (number1 , number2)
{
    //let  result = (number1 + number2)
    //return result
    return number1 + number2
}
const result = addtwonumber(3,4)
//console.log("result" , result);

function loginusermessage(username = "sam")
{
    if(!username) //we can write (username === undefined also )
        {
  console.log ("please enter username")
  return
        }

    return `${username} just logged in`
}

//console.log(loginusermessage("Aryan"))
//console.log(loginusermessage())//it will give undefined

function calculatecartprice(...num1){ //here ... means rest operator 
//rest operator means give all value in a array or a pack.
    return num1
}

//console.log(calculatecartprice(500,1000,1500,2000))
const user = { //user is an object
    username : "Aryan",
    price : 199
}

function handleobject (anyobject)
{ 
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleobject(user);

handleobject({
    username : "sam",
price : 399
})

const mynewarray = [200,300,400,600]

function returnSecondvalue(getArray)
{
    return getArray[1]
}
console.log(returnSecondvalue(mynewarray))