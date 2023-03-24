const readlineSync = require("readline-sync");
let n = readlineSync.question("Choose a number please ");
let sum = 0;
for (i = 1; i <= n; i++) {
  let nBis = new Number(readlineSync.question("Choose a number please "));
  sum += nBis;
}

console.log(sum);
