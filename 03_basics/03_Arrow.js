const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Meena"
//     console.log(this.username); // this.username can be used inside object not in function here
// }

// chai()

// function chai(){
//     let username = "Meena"
//     console.log(this.username); // this.username can be used inside object not in function here
// }

// const chai = function(){
//     let username = "Meena"
//     console.log(this.username); 
// }
// chai()

const chai = () => {
    let username = "Meena"
    console.log(this); 
}
chai()

// NOTE: browser ke andr global object is window object ******* asked in interviews*******

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }    
// const addTwo = (num1,num2) => num1 + num2    

// const addTwo = (num1, num2) => (num1 + num2)
// if curly braces used then return is must ,when curly braces not used retun not used (used in react)

const addTwo = (num1, num2) => ({username: "meena"})

console.log(addTwo(3,4))

const myarray = [2,5,3,7,8]

// myarray.foreach()