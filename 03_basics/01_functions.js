function sayMyName(){
    console.log("M");
    console.log("E");
    console.log("E");
    console.log("N");
    console.log("A");
}

// sayMyName // reference
// sayMyName() // with() it becomes execution

// function addTwoNumbers(number1, number2){ // parameters in function difinition
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){ // parameters in function difinition
    let result = number1 + number2;
    return result
}
const result = addTwoNumbers(3,"4") //arguments in calling

// console.log(result);

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Meena"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){ // ... rest or spread operator
    return num1
}

console.log(calculateCartPrice(100, 200, 300, 400,500));

const user = {
    username: "Meena",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[0]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));