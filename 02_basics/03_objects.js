// singleton

// Object.create

// object literal

const jsUser = {
  name: "Vishal",
  "Full Name" : "Vishal Gour",
  age: 22,
  location: "Delhi",
  email: "vvishalgourwipro.com",
  isLoggedIn: false,
  LastLoginDays: ["Monday", "Thrusday"],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["name"]);
// console.log(jsUser["Full Name"]);

// jsUser.email = "vvishal33@gmail.com"
// Object.freeze(jsUser)

jsUser.greeting = function() {
    console.log("hello js ");
}

jsUser.greeting2 = function() {
    
    console.log(`Hello My name is ${this["Full Name"]}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());


