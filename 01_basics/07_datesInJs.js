
// *** Dates 

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let mycreatedDate = new Date(2023 , 0 , 23)
// let mycreatedDate = new Date(2023 , 0 , 23 ,5,3)
let mycreatedDate = new Date("01-14-2024")

// // console.log(mycreatedDate.toDateString());
// console.log(mycreatedDate.toLocaleString());



// let myTimeStamp = Date.now()
// console.log(myTimeStamp);



// console.log(Math.floor(Date.now()/1000));

////  in js month and days start with 0 index 

// let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getHours());


// let now = new Date();
// console.log(now); // Full date and time   the  time is not redable 



let now = new Date();

// 📅 Date
let date = now.getDate();        // Day (1-31)
let month = now.getMonth() + 1;  // Month (0-11) => add 1
let year = now.getFullYear();    // Year

// ⏰ Time
let hours = now.getHours();      // 0-23
let minutes = now.getMinutes();  // 0-59
let seconds = now.getSeconds();  // 0-59

console.log(`Date: ${date}/${month}/${year}`);
console.log(`Time: ${hours}:${minutes}:${seconds}`);

