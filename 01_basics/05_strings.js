// use string-interpulation for better way to write js.
let thisIs = {
  name: "dipok roy",
  sate: "dinajpur",
  city: "rnaisonkail",
  zipcode: "5012",
};
let state = "dinajpur";

console.log(`My name is dipok and I am from ${state}`);
//  this is called string-interpulation

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// string methods
// console.dir(String.prototype) - to know anytype of method name

// string Anchor method.
/*
let anc = document.createElement("a");

// this will create a <a>Click Me</a>
anc.innerText = "click Me";

// this will create a <a href="https://google.com">Click Me</a>
anc.href = "https://google.com";

// now to add this in your html page or website page just append the the element.
document.appendChild(anc);

// done your anchor method is done.
*/

// string .at method

/*
let str = "dipok";
// this is string
console.log(str.at(-1));
// and this is how .at method work check the playlist on youtube
*/

// string trim method
/*
let name = "       Dipok       ";
console.log(name.trim());
console.log(name);
*/
// this is a trim method it work to delete the extra space from you text

// string replace method
/*
let theMet = "http://google.com/209$-1/user01";
console.log(theMet.replace("209$-1", "profile"));
*/
// you can replace the string using replace method
