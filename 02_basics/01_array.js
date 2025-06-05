//***************** */ array

// const arr = [4, 5, 7, 8, 55, 45];
// const newarr = new Array(5, 5, 6, 7);
// // console.log(arr[0]);

// array methods

// newarr.push(6)  // add some value
// console.log(newarr);
// newarr.pop() // remove last value in the array
// console.log(newarr);

// arr.unshift(7)  Add first value
// arr.shift();

// console.log(arr.includes(9));
// console.log(arr.indexOf(9));

// console.log(arr);


// let myarr = arr.join()
//   // join is use for converting array to string 
// console.log(arr);       
// console.log(myarr);


const arr = [4, 5, 7, 8, 55, 45];


///  slice and splice   

// slice 

//  The slice() method in JavaScript is used to extract a section of an array or string and returns a new array or string. It does not modify the original array or string.


console.log("A " , arr);

const myr1 = arr.slice(1,3)
console.log(myr1);


// splice 
// The splice() method in JavaScript is a versatile tool for modifying arrays. It allows you to add, remove, or replace elements within an array, directly altering the original array.

const myr2 = arr.splice(1,3)
console.log(myr2);
console.log("c", arr);
