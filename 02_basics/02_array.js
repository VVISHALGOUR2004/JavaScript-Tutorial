const heros = ["Thor", "IronMan", "Spiderman"];
const dc_heros = ["Superman", "flash", "batman"];

// heros.push(dc_heros)
// console.log(heros);

// conact method add new array

// const allHeros = heros.concat(dc_heros);
// console.log(allHeros);

//  spread Operator

const all_new_heros = [...heros, ...dc_heros];
console.log(all_new_heros);

// flat method
// In this flat method if we have one array and in this array have one-two  more array so flat method arrange in one single array

const another_arr = [
  67,
  89,
  8,
  (9)[(98, 7, 5, 9)],
  98,
  6,
  23,
  (4)[(98, 56, 78, 88)],
];
const changeInOneArray = another_arr.flat(Infinity);
console.log(changeInOneArray);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "vishal"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

