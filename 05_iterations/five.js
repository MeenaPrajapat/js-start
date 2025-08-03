const coding = ["js", "ruby", "python", "java", "cpp"]

// coding.forEach( function (val) { // callback function
//     console.log(val);
// }) 

// coding.forEach( (item) =>  { // callback function in arrow function
//     console.log(item);
// }) 

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {

    console.log(item.languageName);
})

