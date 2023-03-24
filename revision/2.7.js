const readlineSync = require("readline-sync");
let numN = new Number(readlineSync.question("Please choose a number?"));
let sum = 0;
for (i = 1; i <= numN; i++) {
  let numBis = new Number(readlineSync.question("Please choose a new number?"));
  sum += numBis;
}
console.log(sum);
