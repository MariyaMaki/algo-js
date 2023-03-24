const readlineSync = require("readline-sync");
let minAge = readlineSync.question("Give a minimal age please ");
let maxAge = readlineSync.question("Give a maximal age please ");
let currentAge = readlineSync.question("Give your current age please ");

if (minAge > maxAge) {
  console.log("You made a mistake!");
} else {
  if (currentAge > minAge && currentAge < maxAge) {
    console.log(`Your current age is between ${minAge} and ${maxAge}`);
  }
}
