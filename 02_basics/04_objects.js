const regularUser = {
  email: "dipokrayakil7777@gmail.com",
  location: "Dhaka",
  isLoggedIn: true,
  lastLoginDays: ["Monday", "Saturday"],
  fullName: {
    UserFullName: {
      firstName: "Dipok",
      lastName: "Ray",
    },
  },
};
console.log(
  regularUser.fullName.UserFullName.firstName,
  regularUser.fullName.UserFullName.lastName
);
// you can access the object value like this, and you can with more nested object

const user1 = { 1: "Dipok", 2: "Ray" };
const user2 = { 3: "Akil", 4: "Ray" };

const user = Object.assign({}, user1, user2);

console.log(user);
// 