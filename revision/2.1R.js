const readlineSync = require("readline-sync");
let age = readlineSync.question("What is your age?");
// if (age >= 18) {
//   console.log("You are an adult");
// } else {
//   console.log("You are a grimlins!");
// }

let adultOrNot = age >= 18 ? "You are an adult" : "you are a grimlins!";
console.log(adultOrNot);
