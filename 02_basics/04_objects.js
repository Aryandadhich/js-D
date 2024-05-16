//const tinderUser = new Object() //singletono-bject
const tinderUser = {} //non-singleton-object

tinderUser.id = "123abc"
tinderUser.name = "rammy"
tinderUser.isloggeIn = false 
//console.log(tinderUser);

const regularUser = {
    email: "aryan@gmail.com",
    fullname:{
        userfullname : {
            firstname : "aryan",
            lastname : "dadhjeech"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {2: "a", 4: "b"}

//const obj3 = {obj1 , obj2} //this give not valid object like array 
//.. so we use insted of this 
const obj3 = Object.assign({},obj1, obj2)

//console.log(obj3)

const course = {
    coursename : "js in hindi ",
    price : "999",
    courseinstructor : "hitesh"
}

//course.courseinstructor nornal method to call the value
//.. if i have to call courseinstructor value 3 times then i have to call 3 times so
//.. insted of this we use this method ...

const {courseinstructor : insturctor} = course
//console.log(courseinstructor);
console.log(insturctor)

 