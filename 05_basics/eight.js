const mynums = [1,2,3]


// in the function
// let mytotal = mynums.reduce(function (acc,currval) {
//     console.log(`acc : ${acc} and currval ${currval}`);
//     return acc + currval
// }, 0)

// in arrow function 
const mytotal = mynums.reduce( (acc , currval) => acc+currval , 0)
console.log(mytotal);

const shopingcart = [
    itemname = "js courae",
    price : 999, 
],