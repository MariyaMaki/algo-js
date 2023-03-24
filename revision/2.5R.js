const readlineSync = require("readline-sync");
do {
  favNum = new Number(readlineSync.question("What is your favorite number?"));
  if (favNum != 42) {
    console.log("Are you sure?");
  } else {
    console.log("42 is the answer to the universe!");
  }
} while (favNum != 42);
