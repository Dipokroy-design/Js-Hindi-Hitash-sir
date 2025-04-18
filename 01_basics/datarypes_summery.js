// primitive

// 7 types : string, Number, Boolearn, Null, Undefined, symbol, BigInt,
// those all are primitive datatype

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Referance type (non-primitive)

// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// this is a assignmet
/*
 Return type of variables in JavaScript
 
1) Primitive Datatypes
Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint

2) Non-primitive Datatypes
Arrays  =>  object
Function  =>  function
Object  =>  object
*/

// ++++++++++++++++++++++++++++++++++++++++++++++==++++++++++++++++++++++++++++++++++++++++

// stack (primitive), and heap (non-primitive)
// for example
/*
let thisIsAData = "Dipok Ray";
//this is a stack

let thisIsAAnotherData = thisIsAData;
console.log(thisIsAData);
console.log(thisIsAAnotherData);
*/
// this is a pure example
