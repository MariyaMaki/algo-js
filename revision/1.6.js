const readlineSync = require("readline-sync");
let num1 = readlineSync.question("Can you choose a number please?");
let num2 = readlineSync.question("Can you choose a second number please?");
let result = Math.floor(num1) % Math.floor(num2);
console.log(result);
