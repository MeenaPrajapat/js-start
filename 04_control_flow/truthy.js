// const userEmail = "meena@"
// const userEmail = ""
const userEmail = []

if(userEmail){
    console.log("got user email");
} else {
    console.log("dont have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// for checking array truth
// if(userEmail.length == 0){
//     console.log("array is empty");
// }

// for checking object truth

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// NOTES ********
//  false == 0  // true
//  false == '' // true
//  0 == ''  // true

// Nullish Coalescing Operator (??): null undefined
// ?? used for null safety check
let vla1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 100
val1 = null ?? 10 ?? 30

console.log(val1);

// ternary operator ?
 // consition ? true : false

const iceprice = 100
iceprice <= 80 ? console.log("less than 80") : console.log("more than 80")