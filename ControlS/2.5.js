const readlineSync = require("readline-sync");
var favoriteNum = new Number(
  readlineSync.question("What's your favorite number?")
);

while (favoriteNum != 42) {
  console.log(
    "Are you sure? Like, really sure? It's a life or death question..."
  );
  favoriteNum = new Number(
    readlineSync.question("What's your favorite number?")
  );
}
console.log("The cake is a lie...");
