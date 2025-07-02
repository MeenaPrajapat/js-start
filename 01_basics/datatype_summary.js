
/* 
types of datatypes:

1. Primitive (Call by value) : 7 types => String, Number, Boolean, null, undefined, Symbol, BigInt

2. Non-Primitive (Call by reference (pass-by-sharing)): Arrays, Objects, functions

****JavaScript is dynamically typed*****
*/

const score = 100
const scoreVlaue = 100.3

const loggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// for bigInt
const bigNumber = 346543576654356754n

// non- primitive: arrays, objects, functions
const heros = ["shakiman", " naagraj", " doga"]
let myObj = {
    name: "Meena",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof anotherId);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3