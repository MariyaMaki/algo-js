const readlineSync = require("readline-sync");
let tab1 = [];

function rand10(max) {
  return Math.floor(Math.random() * (max + 1));
}

function multiRand(a, tab, max) {
  for (i = 0; i < a; i++) {
    tab.push(rand10(max));
  }
  return tab;
}

function average(tab) {
  let moyenne = 0;
  let sum = 0;
  for (let i = 0; i < tab.length; i++) {
    sum += tab[i];
    moyenne = sum / tab.length;
  }
  return moyenne;
}

function min(tab) {
  return (min = Math.min(...tab));
}

function max(tab) {
  return (max = Math.max(...tab));
}
const maxRandom = new Number(
  readlineSync.question("What is the maximal value of the random numbers ? ")
);
const nombreVariable = new Number(
  readlineSync.question("How many numbers do you want in the array ? ")
);

console.log(multiRand(nombreVariable, tab1, maxRandom));
console.log("Maximal number is " + max(tab1));
console.log("Minimal number is " + min(tab1));
console.log("Average number " + Math.round(average(tab1) * 100) / 100);
