const readlineSync = require("readline-sync");
let minAge = new Number(readlineSync.question("What is the min age?"));
let maxAge = new Number(readlineSync.question("What is the max age?"));
let currentAge = new Number(readlineSync.question("What is your current age?"));

if (minAge < currentAge && currentAge < maxAge) {
  console.log("The current age is between the two values");
} else if (minAge > maxAge) {
  console.log("Error: you didn't understand the question");
}
