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

function loginusermessage(username = "sa")
{
    if(!username) //we can write (username === undefined also )
        {
  console.log ("please enter username")
  return
        }

    return `${username} just logged in`
}

//console.log(loginusermessage("Aryan"))
console.log(loginusermessage())//it will give undefined 
