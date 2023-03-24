const readlineSync = require("readline-sync");
let n = readlineSync.question("Can you give me a random number please?");
let arr1 = [];

function rand10(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function multiRand(n) {
  for (i = 1; i <= n; i++) {
    arr1.push(rand10(1, 10));
  }
  return arr1;
}

console.log(multiRand(n));
