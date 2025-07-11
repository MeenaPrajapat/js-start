
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23) // month starting from 0
// let myCreatedDate = new Date(2023, 0, 23 , 5, 3)// month starting from 0
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // converting into seconds

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getTime());

// ` ${newDate.getDay()} and time`

// This code will output the full weekday name
const newDate = new Date();
const weekday = newDate.toLocaleString('default', { 
    weekday: 'long'  // use ctrl + space for weekday and long 
});
console.log(weekday);
