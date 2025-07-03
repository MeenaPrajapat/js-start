
const name = "Meena"
const repoCount = 1

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('meena-prjpt')
console.log(gameName[0]);
console.log(gameName.__proto__); 

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-10,5)
console.log(anotherString);

const newStringOne = "  meena   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://meena.com/meena%20prajapat"
console.log(url.replace('%20', '-'));

console.log(url.includes('eena'));

console.log(gameName.split('-'));