//for

// for (let index = 0; index < 10; index++) {
//     if(index == 5){
//         console.log("5 is best no.");
//     }
//     const element = index;
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     // console.log(`Outer loop ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop ${j}`);
//         console.log(i + ' * ' + j + ' = ' + i*j);
//     }
// }

let myArray = ["meena", "navya", "khushi"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

// break and contiue
for (let index = 0; index < 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        break
    }
    console.log(`value of i is ${index}`);
    
}

for (let index = 0; index < 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        continue // skip condition
    }
    console.log(`value of i is ${index}`);
    
}
