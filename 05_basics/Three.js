// for of 

const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world"

for (const greet of greetings) {
    //console.log(`each char is ${greet}`)
}

//Maps 

const map = new Map()
map.set('IN',"india")
map.set('IND',"indonasia")

//console.log(map)

for (const [Key , value] of map) {
    console.log(Key, ':-', value);
}