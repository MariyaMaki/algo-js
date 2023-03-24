const readlineSync = require("readline-sync");

do {
  favoriteNum = new Number(
    readlineSync.question("What's your favorite number?")
  );
  if (favoriteNum != 42) {
    console.log(
      "Are you sure? Like, really sure? It's a life or death question..."
    );
  } else {
    console.log("The cake is a lie...");
  }
} while (favoriteNum != 42);
