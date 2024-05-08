const marvel_heros =["thor",'iron_man','spidy']
const dc_hero = ["superman","baburao","ramu"]

// marvel_heros.push(dc_hero)
// console.log(marvel_heros[3][0]);

// const all_hero = marvel_heros.concat(dc_hero)
// console.log(all_hero);

const all_new_hero = [... marvel_heros, ...dc_hero]

//console.log(all_new_hero);

const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_anotherarray = anotherarray.flat(Infinity)
//console.log(real_anotherarray);

console.log(Array.isArray("Aryan"));
console.log(Array.from("Aryan"));
console.log(Array.isArray({name:"Aryan"})); // give emptyy array becaue we havbe to keys or value 

let score1 = 100
let score2 = 200
let score3 =  300

console.log(Array.of(score1,score2,score3))