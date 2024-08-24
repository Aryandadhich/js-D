const promiseone = new Promise (function(resolve , reject){

    //Do an async task
    //DB calls , cryptography , neyword 
    setTimeout(function(){
       console.log("async task is completed");
       resolve()
    }, 1000)
})

promiseone.then(function(){
    console.log('promise consume')
})

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//     console.log("asytnc task 2");
//     resolve()
//     },1000)
// }).then(function(){
//     console.log("asynv 2 resolved");
// })

// const promiseThree = new Promise(function(resolve , reject){
//       setTimeout(function(){
//        resolve({username : "aryan",email : "aryan@gmail.com"})
//       }, 1000)
// })

// promiseThree.then(function(user){
// console.log(user)
// })

const promisefour = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({username:"aryan" , pass : "345678"})
        }
        else{
            reject('error : something went wrong')
        }
    }, 2000);
})

promisefour.then((user) =>{

    console.log(user);
    return user.username
}).then((username) => {
   console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(()  => console.log("the promise is either resolved or rejcet"))




// using async and await 2nd approach


const promisefive = new Promise(function (resolve , reject){

    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript" , pass : "345678"});
        }
        else{
            reject('Error:- JS went wrong')
        }
    }, 1000)
})

async function consumepromisefive (){
    try{
        const response = await promisefive
        console.log(response);
    }
    catch(error){
        console.log(error)
    }
}

consumepromisefive()