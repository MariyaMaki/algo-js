const readlineSync = require("readline-sync");
do {
  favnum = new Number(readlineSync.question("What is your favorite number?"));
  if (favnum != 42) {
    console.log("Are you sure?");
  } else {
    console.log("The answer to the universe...");
  }
} while (favnum != 42);
