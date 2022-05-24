const readlineSync = require("readline-sync");
let num1 = new Number(
  readlineSync.question("What's your first decimal number?")
);
let num2 = new Number(
  readlineSync.question("What's your second decimal number?")
);

console.log("Vos deux nombres sont " + Math.trunc(num1) + " le " + num2);
console.log("Le produit des deux nombres vaut " + num1 * num2);
