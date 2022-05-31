const readlineSync = require("readline-sync");
let castMembers = new Array();
let tvSerie = [];

function askTvSerie() {
  let name = readlineSync.question("What is your favorite TV serie ?");
  let prodYear = readlineSync.question(
    "What is the production year of this serie ?"
  );
  let nbrActor = readlineSync.question("How many actors ?");

  for (let i = 1; i <= nbrActor; i++) {
    let actorFirstname = readlineSync.question("Actor's firstname ?");
    let actorName = readlineSync.question("Actor's name ?");

    let actor = {
      actorFirstname,
      actorName,
    };

    castMembers.push(actor);
  }

  return (tvSerie = {
    name,
    prodYear,
    castMembers,
  });
}
// console.log(askTvSerie());

function randomizeCast(tvSerie) {
  let newCast = new Array();
  let n = castMembers.length;

  for (let i = 0; i <= n - 1; i++) {
    let nbr = askTvSerie();
    newCast.push(nbr); // ajouter nbr dans tableau
  }
  return console.log(newCast);
}

let a = randomizeCast(tvSerie);
console.log(a);
