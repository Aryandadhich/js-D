const name = "aryan"
const repocount = 50

// console.log(name + repocount + " value");
// this method getting old so we use placeholder methood

console.log(`my name is ${name} and my repocount is ${repocount}`);

//declaration of string another method
const gameName = new String("aaryan")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'))
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(1,3)
console.log(anotherString);

const newStringone = "  aryan  "
console.log(newStringone.trim())

const url = "https://aryan.com//aryan%20dadhich"
console.log(url.replace('%20','-'))

console.log(url.split('%20'));