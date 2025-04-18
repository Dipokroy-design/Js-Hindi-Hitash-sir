// singletons are objects that are instantiated only once in the application lifetime and are shared across the application
// singletons are used to store global state or to provide utility functions that are used across the application
// singletons are created using the module pattern in JavaScript
// object.create() is used to create a new object with the specified prototype object and properties

// object leterals
const person = { name: "hitesh", age: 24, city: "delhi" }; // this is an object

// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com";
// this how you can overwrite the object value 
// console.log(JsUser.email)


// Object.freeze(JsUser)
// this will make the object immutable and you can't change the value of the object 

// Object.seal(JsUser)
// this will make the object immutable and you can't add the new value in the object

// Object.preventExtensions(JsUser)
// this will make the object immutable and you can't add the new value in the object

// Object.defineProperty(JsUser, "email", {
//  writable: false,
//  enumerable: false,
//  configurable: false
// })
// this will make the object immutable and you can't change the value of the object


// Object.defineProperties(JsUser, {
//  email: {
//    writable: false,
//    enumerable: false,
//    configurable: false
//  },
//  name: {
//    writable: false,
//    enumerable: false,
//    configurable: false
//  }
// })
// this will make the object immutable and you can't change the value of the object

JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
