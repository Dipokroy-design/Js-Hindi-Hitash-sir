# what is Promise in javascript

A **Promise** in JavaScript is a **built-in object** that represents the **eventual completion** (**or failure**) of an **asynchronous** operation and its resulting value.

### Basic Concept

Imagine you're ordering a pizza. The pizzeria gives you a promise that your pizza will be delivered. You don't have it yet, but you’ll get it later — or not, if something goes wrong.

In JavaScript, a Promise works the same way for **asynchronous** tasks, like fetching data from an **API**.

```js
let promise = new Promise(function (resolve, reject) {
  // asynchronous operation
});
```

- `resolve(value)` → Called when the operation succeeds.

- `reject(error)` → Called when the operation fails.

#### For example check the code

### Promise States

- `Pending`: Initial state.

- `Fulfilled`: `resolve()` was called.

- `Rejected`: `reject()` was called.

# About res.txt and .json()

| Feature        | .text()                                                    | .json()                                                          |
| -------------- | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| Returns        | A Promise that resolves to a string                        | A Promise that resolves to a JavaScript object                   |
| Use Case       | When you want to read plain text like .txt, .html, or XML. | When you're fetching data from an API that returns JSON.         |
| Parses         | Just raw text (no parsing).                                | Parses the response body into a JavaScript object automatically. |
| Needs Parsing? | ❗ Yes, if it's JSON, you must parse manually.             | ✅ No extra parsing needed.                                      |

## 🔍 Example of `.text()`

```js
fetch("example.txt")
  .then((res) => res.text())
  .then((data) => console.log(data)); // Outputs plain text from the file
```

## 🔍 Example of `.json()`

```js
fetch("https://api.example.com/data")
  .then((res) => res.json())
  .then((data) => console.log(data)); // Outputs parsed object
```
