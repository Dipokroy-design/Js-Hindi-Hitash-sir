const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];
// this is a sperad operator to merge two arrays in one array or more than two arrays in one array 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
// learn more about this method from MDN docs 
console.log(Array.from("Hitesh"));
// this will make an array of string characters and length of the string, learn more about this method from MDN docs
console.log(Array.from({ name: "hitesh" })); // interesting
// this will make an array of object keys and values and this can be anything like string, object, number etc 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
