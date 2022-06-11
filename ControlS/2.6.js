const readlineSync = require("readline-sync");
// var date = readlineSync.question("Enter a number between 1 and 7:");

// switch (date) {
//   case "1":
//     console.log("Monday");
//     break;
//   case "2":
//     console.log("Tuesday");
//     break;
//   case "3":
//     console.log("Wednesday");
//     break;
//   case "4":
//     console.log("Thursday");
//     break;
//   case "5":
//     console.log("Friday");
//     break;
//   case "6":
//     console.log("Saturday");
//     break;
//   case "7":
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Fucker there are 7 days in a week!");
// }

let dayOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
do {
  day = readlineSync.question("Enter a number between 1 and 7:");
} while (day < 1 || day > 7);
console.log(dayOfWeek[day - 1]);
