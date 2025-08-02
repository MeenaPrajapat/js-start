let a= 345
// var c = 300

if(true){
    let a = 10
    const b = 20
    console.log("INNER:" , a);
    // c = 30
}

console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Meena"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}
// one()

if(true){
    const username = "Meena"
    if(username === "Meena"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++++ Interesting +++++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1
}

// addone(5)

// console.log(addTwo(5)); // cant be executed due to type of function declarataion different ,it is stored in variable  
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));