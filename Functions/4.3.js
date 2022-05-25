const readlineSync = require("readline-sync");
let n = readlineSync.question(
  "Combien de nombres voulez-vous dans le tableau ? "
);

function rand10() {
  return Math.floor(Math.random() * 10 + 1);
}

function multiRand(n) {
  let array = []; //tableau
  for (let i = 0; i <= n - 1; i++) {
    let nbr = rand10();
    array.push(nbr); // ajouter nbr dans tableau
  }
  return console.log(array); //resortir tableau return
}
multiRand(n);
