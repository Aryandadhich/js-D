//for each

const coding = ["js","ruby","java","python"]

// coding.forEach( function (val) {
// console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item , index , arr) => {
// console.log(item , index , arr)
// })

const myCoding = [
    {
    languageName : "javascript",
    languageFilename : "js",
    },
    {
        languageName : "python",
        languageFilename : "py",
    },
    {
        languageName : "java",
        languageFilename : "java",
    }
]

myCoding.forEach( (item) => {
 console.log(item.languageName);
})