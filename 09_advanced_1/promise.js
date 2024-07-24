const promiseone = new Promise (function(resolve , reject){

    //Do an async task
    //DB calls , cryptography , neyword 
    setTimeout(function(){
       console.log("async task is completed");
       resolve()
    }, 5000)
})

promiseone.then(function(){
    console.log('promise consume')
})

new Promise(function(resolve, reject){
    setTimeout(function(){
    console.log("asytnc task 2");
    resolve()
    },7000)
}).then(function(){
    console.log("asynv 2 resolved");
})

const promiseThree = new Promise(function(resolve , reject){

})