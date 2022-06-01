// Make a program that generates an integer between 1 and 100 (don't display it to the user).

// Then the program should display "Guess the number" and ask the user to guess. If the user enters a
//number which is too low it should display "Too low" and re-ask the question. If the user enters a number
//which is too high it should display "Too high" and re-ask the question. If the user guess correctly it
//should display "Well guessed!" and exit.

const readlineSync = require("readline-sync");
function generateNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
for (let i = 0; i < 5; i++) {
  let numberUser = readlineSync.questionInt(
    "Guess the number (You only have 5 chance): "
  );
  if (numberUser < generateNumber) {
    console.log("Too low");
  } else if (numberUser > generateNumber) {
    console.log("Too high");
  } else {
    console.log("Well guessed!");
    break;
  }
}
