const userName = new Promise((resolve, reject) => {
  let personName = false;
  if (personName == true) {
    resolve(`User Name is Dipok`);
  } else {
    reject(`Something went wrong...!!`);
  }
});

userName
  .then((user) => {
    console.log(`${user} have complete the task`);
  })
  .catch((error) => {
    console.error(`ERROR: ${error}`);
  });
// you can also chaining the `then` with the flow 
// you can also use finnaly after catch
// have to about .json() and res.txt
