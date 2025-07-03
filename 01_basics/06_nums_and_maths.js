const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

// const otherNumber = 1123.8966

// console.log(otherNumber.toPrecision(3));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++ Maths ++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.3));
// console.log(Math.min(4.3,9,7,4));
// console.log(Math.max(4.3,4,3,2,1));

console.log(Math.random()); // value btw 0 and 1 ( 1 not inclusive)
console.log(Math.floor(Math.random()*4) + 1 ); // random no. between 0 and 1 is multiplied by 4 (4 is not inclusive)
// floor rounds off to the smallest value

const min = 10
const max = 40

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
/*
(max - min + 1) :
This ensures that the random range includes both min and max.
If we just used (max - min), it would never reach the max value.
*/

