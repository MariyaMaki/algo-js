const readlineSync = require("readline-sync");
let minAge = new Number(readlineSync.question("What's the minimal age?"));
let maxAge = new Number(readlineSync.question("What's the maximal age?"));
let currentAge = new Number(readlineSync.question("What's your current age?"));

if (minAge < currentAge && currentAge < maxAge) {
  console.log("the current age is between both values");
} else if (minAge > maxAge) {
  console.log("Error, please be careful and read again, thanks!");
}
