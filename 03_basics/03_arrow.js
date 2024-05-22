const user = {
    username : "Aryan",
    price : 999,
    
    welcomeMessage : function()
    {
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "Nikhil"
// user.welcomeMessage()

//console.log(this);

// function tea()
// {
//     let username = "Aryan"
//     console.log(this.username);
// }
// tea()

//we cannot use this in function because it gives undefined

// const Tea = function()
// {
//     let username = "Aryan"
//     console.log(this.username);
// }
// Tea()  

// this will also not work it also give un-defined


//arrow function
const Tea = () =>
{
    let username = "Aryan"
    console.log(this);
}
//Tea()  

// const addTwo = (num1 , num2) => 
//     {
//        return num1 + num2
//     }
// console.log(addTwo(3,4))

//implicit return in this we dont have to use the paranthesis.

//const addTwo = (num1 , num2) =>  num1 + num2;

//const addTwo = (num1 , num2) => (num1 + num2)

const addTwo = (num1 , num2) => ({username : "Aryan"})
console.log(addTwo(3,4))

//this keyword refer to current context 
//context means normal values (variables what are they holding)

//in browser globals object is window object...