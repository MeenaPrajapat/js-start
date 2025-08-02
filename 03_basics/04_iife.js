// Immediately Invoked function expressions (IIFE): global scope ke pollution se bhi problem hoti h kyi baar toh global scope ke variables ke pollution ko htane ke liye IIFE ka use krte hai. as IIFE create variables in a private scope, not the global one.

// Global scope pollution means:
// Creating too many variables or functions in the global scope (i.e., outside of any function or block), which can cause conflicts or bugs in your program.

(function chai(){
    console.log(`DB CONNECTED`);
})();  // (; is break point)
// chai()

// ()() first is function definition and second is execution

( () => {
    console.log(`DB CONNECTED TWO`);
} )();

( function aurcode() {
    // named IIFE
    console.log(`DB CONNECTED THREE`);
} )();

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED four ${name}`);
} )('hitesh');