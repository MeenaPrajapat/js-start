// conversion left part in previous file
// console.log(+true); // wrong true+
// console.log(+""); 
/*
 true+ → ❌ invalid: you're missing a second value for addition.
 +true → ✅ valid: unary plus converts true to 1.
 */

// console.log(2 > 1); 
// console.log(2 >= 1); 
// console.log(2 < 1); 
// console.log(2 == 1); 
// console.log(2 != 1); 

// for comparison datatype of both should be same
// console.log("2" > 1);
// console.log("02" > 1);

console.log(null == 0);
console.log(null > 0);
console.log(null >= 0);  

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0); 

/* === Strict Equality Operator
The === operator checks both:
1. Value
2. Type
It returns true only if both value and type are the same.
*/
console.log("2" === 2);