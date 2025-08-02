// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Meena",
    "full name": "Prajapat",
    [mySym]: "mykey1",// imp
    age: 21,
    location: "Faridabad",
    email: "meenaprajapat98132@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// object access
// console.log(JsUser.email);

// console.log(JsUser.full name); // can't access

// console.log(JsUser["full name"]);
// console.log(JsUser.email);
// console.log(JsUser[mySym]);

// object val change
JsUser.email = "meenaprajatpat@gmail.com"

// Object.freeze(JsUser)
JsUser.email = "meenaprajatpat123@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());