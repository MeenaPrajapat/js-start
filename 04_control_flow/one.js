// if

// const isUserLoggedIn = true
// if(5 !== '5' ){
//     console.log("yes");
// }

// <, >, <=, >=, ==, ===, !=,  !==

// let a = 5;
// let b = '5';
// console.log(a != b);   // false → because '5' is converted to 5 (same value)
// console.log(a !== b);  // true → because one is a number, the other is a string

// const score = 200

// if(score>100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

const balance = 1000
// if(balance > 500) console.log("test"), console.log("test2"); // not readable so dont use it

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else  {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard){
    console.log("allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}
