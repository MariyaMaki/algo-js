const readlineSync = require("readline-sync");
let firstNum = readlineSync.question("Give a number with a decimal please");
let secondNum = readlineSync.question(
  "Give a second number with a decimal please"
);
let result = Math.floor(firstNum) * secondNum;
let rest = firstNum % secondNum;
console.log(result);
console.log(rest);
