const readlineSync = require("readline-sync");
let n = new Number(readlineSync.question("Chose a number please: "));
var sum = 0;
var i = 0;

for (i = 0; i < n; i++) {
  let n = new Number(readlineSync.question("Chose a new number: "));
  sum += n;
}
console.log(sum);
