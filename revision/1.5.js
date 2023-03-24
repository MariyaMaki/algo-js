const readlineSync = require("readline-sync");
let num1 = readlineSync.question(
  "Can you choose a number with a decimal please?"
);
let num2 = readlineSync.question(
  "Can you choose a second number with a decimal please?"
);
let result = Math.floor(num1) * num2;
console.log(result);
