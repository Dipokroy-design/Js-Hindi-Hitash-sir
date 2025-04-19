# function can be in 4 ways

## ✅ 1. Pass Data by Returning It from One Function

```js
function getName() {
  return "Dipok";
}

function greetUser(name) {
  console.log(`Hello, ${name}!`);
}

let user = getName(); // get data from first function
greetUser(user); // pass it to the second function
```

```js
greetUser(getName());
```

## ✅ 2. Pass Data Directly as a Parameter

```js
function getNumber(num) {
  calculateSquare(num); // passing directly
}

function calculateSquare(n) {
  console.log(n * n);
}

getNumber(5); // prints 25
```

## ✅ 3. Use Callback Function (pass function as parameter)

```js
function fetchUser(callback) {
  const name = "Dipok";
  callback(name); // send data to the callback
}

function greetUser(name) {
  console.log(`Hello, ${name}`);
}

fetchUser(greetUser); // pass greetUser as a callback
```

## ✅ 4. Use Return Value Inside Another Function

```js
function getAge() {
  return 23;
}

function showAgeInfo() {
  let age = getAge(); // get result
  console.log(`User is ${age} years old.`);
}

showAgeInfo();
```

## Quick Summary

| You want to...                   | Use this:                 |
| -------------------------------- | ------------------------- |
| Use data later                   | `return` from a function  |
| Pass data into another function  | Use parameters            |
| Chain actions / delays           | Use callbacks or Promises |
| Handle async tasks (e.g., fetch) | Use `async/await `        |
