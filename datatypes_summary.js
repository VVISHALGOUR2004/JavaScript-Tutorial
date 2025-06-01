//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3 



// +++++++++++++++++++++++++++++++++++++++++


// stack(primitive) , heap(Non-primitive)  


//  stack 

let name = "Vishal";
let anotherName = name

anotherName = "Sandeep Joshi"

console.log(name);
console.log(anotherName);

// This is called stack because stack create copy of the variable if we create name variable and its value is "vishal" and at the next we create another variable which is equal to first variable but if we give second variable value to "Sandeep Joshi" so the another name value is be a Sandeep joshi.This is called Stack.


// Non Primitive (Heap )

let obj = {

    namee : "Vishu",
    email : "vis@abc.gmail.com"
}


let obj2 = obj

obj2.namee = "ALLU"

console.log(obj);
console.log(obj2);




