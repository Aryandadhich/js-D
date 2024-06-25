const mynums = [1,2,3]

let mytotal = mynums.reduce(function (acc,currval) {
    console.log(`acc : ${acc} and currval ${currval}`);
    return acc + currval
}, 0 )
console.log(mytotal);