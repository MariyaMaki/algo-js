const readlineSync = require("readline-sync");
let num1 = new Number(readlineSync.question("What's your first number?"));
let num2 = new Number(readlineSync.question("What's your second number?"));

console.log("Vos deux nombres sont " + num1 + " et le " + num2);
console.log("Le quotient des deux nombres vaut " + (num1 % num2));
