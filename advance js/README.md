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
