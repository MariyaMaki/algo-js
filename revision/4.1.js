const readlineSync = require("readline-sync");
let length = readlineSync.question("What is the length of the rectangle?");
let width = readlineSync.question("What is the width of the rectangle?");

function calcSurface() {
  return length * width;
}
console.log(calcSurface());
