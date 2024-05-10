//singleton  

//object literals

const mysyn = Symbol("key1")
const Jsuser = {
    name: "Aryan",
    "full name" : "Aryan dadheech",
    age : 18,
    [mysyn] : "mykey1", //syumbol syntex
    location : "Udaipur",
    email : "aryan@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , " Tuesday"]
}

//console.log(Jsuser.email)
//console.log(Jsuser["full name"])
//console.log((Jsuser[mysyn]))

//Jsuser.email = "aryan1234@gmail.com"
//console.log(Jsuser.email)
//Object.freeze(Jsuser) // freezing the value here
//Jsuser.email = "artyu@gmail.com"
//console.log(Jsuser);

Jsuser.greetings = function(){
    console.log("Hello Js user");

}
console.log(Jsuser.greetings);

Jsuser.greetingtwo = function(){
    console.log(`Hello Js user, ${this.name}`);

}
console.log(Jsuser.greetingtwo());
