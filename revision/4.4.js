const readlineSync = require("readline-sync");
let n = readlineSync.question("Can you give me a random number please?");
let arr1 = [];
let sum = 0;

function rand10(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function multiRand(n) {
  for (i = 1; i <= n; i++) {
    arr1.push(rand10(1, 10));
  }
  return arr1;
}

function average(arr1) {
  for (let element of arr1) {
    sum += element;
  }
  return sum / arr1.length;
}

function min(arr1) {
  return Math.min(...arr1);
}

function max(arr1) {
  return Math.max(...arr1);
}

// multiRand(n);
console.log(multiRand(n), average(arr1), min(arr1), max(arr1));
